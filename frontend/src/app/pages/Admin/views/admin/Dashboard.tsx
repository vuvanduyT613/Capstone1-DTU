import React, { useEffect } from 'react';
import { useDispatch /*connect,*/ } from 'react-redux';
import Cookies from 'js-cookie';
import CradLineChat from '../../components/Cards/CardLineChart.js';
import CardBarChart from '../../components/Cards/CardBarChart.js';

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'GET_ALL_CHARTJS',
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: 'ADMIN_STATUS',
      payload: {
        token: Cookies.get('access_token'),
        page: 1,
      },
    });
  }, []);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full  xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CradLineChat />
        </div>
        <div className="w-full  xl:w-4/12 mb-12 xl:mb-0 px-4">
          <CardBarChart />
        </div>
      </div>
    </>
  );
}
