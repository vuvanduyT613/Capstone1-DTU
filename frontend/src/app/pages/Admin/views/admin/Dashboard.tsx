import React from 'react';
import CardPageVisits from '../../components/Cards/CardPageVisits';
import CardSocialTraffic from '../../components/Cards/CardSocialTraffic';
import CradLineChat from '../../components/Cards/CardLineChart.js';
import CardBarChart from '../../components/Cards/CardBarChart.js';

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full  xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CradLineChat />
        </div>
        <div className="w-full  xl:w-4/12 mb-12 xl:mb-0 px-4">
          <CardBarChart />
        </div>
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
