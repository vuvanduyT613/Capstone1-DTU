import React from 'react';
import Chart from 'chart.js';
import { date } from 'yup/lib/locale';
import moment from 'moment';
import { useSelector } from 'react-redux';

const generateMonth = () => {
  const newMonth = [];
  const nowMonth = new Date().getMonth();
  for (let i = 0; i <= nowMonth; i++) {
    newMonth.push(moment().month(i).format('MMMM'));
  }
  return newMonth;
};

const generateDefault = () => {
  const newMonth = [];
  const nowMonth = new Date().getMonth();
  for (let i = 0; i <= nowMonth; i++) {
    newMonth.push(0);
  }
  return newMonth;
};

const defineMonth = data => {
  const genMonth = generateMonth();
  const genDefault = generateDefault();
  const checkIndex = data.map(value => {
    return genMonth.indexOf(value.month);
  });
  checkIndex.map((value, index) => {
    genDefault[value] = data[index].numberofdocuments;
  });

  return genDefault;
};

export default function CardBarChart() {
  const genData = generateMonth();
  const { data } = useSelector(state => state.userReducer.chartJS);

  React.useEffect(() => {
    const genDefineData = data.result ? defineMonth(data.result) : null;
    let config = {
      type: 'bar',
      data: {
        labels: genData,
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: '#ed64a6',
            borderColor: '#ed64a6',
            data: genDefineData ? genDefineData : null,
            fill: false,
            barThickness: 8,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: '#4c51bf',
            borderColor: '#4c51bf',
            data: [27, 68, 86, 74, 10, 4, 87],
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Orders Chart',
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: 'rgba(0,0,0,.4)',
          },
          align: 'end',
          position: 'bottom',
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: 'Month',
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.3)',
                zeroLineColor: 'rgba(33, 37, 41, 0.3)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Value',
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.2)',
                zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById('bar-chart').getContext('2d');
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Performance
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">Appointment In</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
