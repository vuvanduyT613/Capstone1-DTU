import React from 'react';
import { Button } from '@material-ui/core';
// components

export default function CardPageVisits() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">Upcoming Appointments</h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-lightBlue-500 h-10 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                View all
              </button>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
            </thead>
            <tbody>
              <tr>
                <th className="flex border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <img className="h-16 rounded-full" src="../../assets/img/angular.jpg" />
                  <div className="items-content m-4">
                    <p>Mr. Duy vu</p>
                    <p className="text-lightBlue-600">New York, USA</p>
                  </div>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <p>Appointment With</p>
                  <p className="text-lightBlue-600">Dr. Cristina Groves</p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <p>Timing</p>
                  <p className="text-lightBlue-600">7.00 PM</p>
                </td>
                <td className=" border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <button
                    className="bg-white h-10 mr-4 hover:bg--blueGray-800 text-white text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-mx-auto mb-1 ease-linear transition-all duration-150"
                    style={{
                      border: '1px solid  rgba(14, 165, 233) ',
                      color: 'rgba(14, 165, 233)',
                    }}
                    type="button"
                  >
                    Take up
                  </button>
                </td>
              </tr>
              <tr>
                <th className="flex border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <img className="h-16 rounded-full" src="../../assets/img/angular.jpg" />
                  <div className="items-content m-4">
                    <p>Mr. Duy vu</p>
                    <p className="text-lightBlue-600">New York, USA</p>
                  </div>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <p>Appointment With</p>
                  <p className="text-lightBlue-600">Dr. Cristina Groves</p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <p>Timing</p>
                  <p className="text-lightBlue-600">7.00 PM</p>
                </td>
                <td className=" border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <button
                    className="bg-white h-10 mr-4 hover:bg-lightBlue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-mx-auto mb-1 ease-linear transition-all duration-150"
                    style={{
                      border: '1px solid  rgba(14, 165, 233) ',
                      color: 'rgba(14, 165, 233)',
                    }}
                    type="button"
                  >
                    Take up
                  </button>
                </td>
              </tr>
              <tr>
                <th className="flex border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <img className="h-16 rounded-full" src="../../assets/img/angular.jpg" />
                  <div className="items-content m-4">
                    <p>Mr. Duy vu</p>
                    <p className="text-lightBlue-600">New York, USA</p>
                  </div>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <p>Appointment With</p>
                  <p className="text-lightBlue-600">Dr. Cristina Groves</p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <p>Timing</p>
                  <p className="text-lightBlue-600">7.00 PM</p>
                </td>
                <td className=" border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <button
                    className="bg-white h-10 mr-4 active:text-lightBlue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-mx-auto mb-1 ease-linear transition-all duration-150"
                    style={{
                      border: '1px solid  rgba(14, 165, 233) ',
                      color: 'rgba(14, 165, 233)',
                    }}
                    type="button"
                  >
                    Take up
                  </button>
                </td>
              </tr>
              <tr>
                <th className="flex border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <img className="h-16 rounded-full" src="../../assets/img/angular.jpg" />
                  <div className="items-content m-4">
                    <p>Mr. Duy vu</p>
                    <p className="text-lightBlue-600">New York, USA</p>
                  </div>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <p>Appointment With</p>
                  <p className="text-lightBlue-600">Dr. Cristina Groves</p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <p>Timing</p>
                  <p className="text-lightBlue-600">7.00 PM</p>
                </td>
                <td className=" border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <button
                    className="bg-white h-10 mr-4 active:bg-lightBlue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-mx-auto mb-1 ease-linear transition-all duration-150"
                    style={{
                      border: '1px solid  rgba(14, 165, 233) ',
                      color: 'rgba(14, 165, 233)',
                    }}
                    type="button"
                  >
                    Take up
                  </button>
                </td>
              </tr>
              <tr>
                <th className="flex border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <img className="h-16 rounded-full" src="../../assets/img/angular.jpg" />
                  <div className="items-content m-4">
                    <p>Mr. Duy vu</p>
                    <p className="text-lightBlue-600">New York, USA</p>
                  </div>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <p>Appointment With</p>
                  <p className="text-lightBlue-600">Dr. Cristina Groves</p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <p>Timing</p>
                  <p className="text-lightBlue-600">7.00 PM</p>
                </td>
                <td className=" border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <button
                    className="bg-white h-10 mr-4 active:bg-lightBlue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-mx-auto mb-1 ease-linear transition-all duration-150"
                    style={{
                      border: '1px solid  rgba(14, 165, 233) ',
                      color: 'rgba(14, 165, 233)',
                    }}
                    type="button"
                  >
                    Take up
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
