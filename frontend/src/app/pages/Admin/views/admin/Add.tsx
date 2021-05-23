import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import CardAdd from '../../components/Cards/CardSettings';

export default function Tables(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'GET_ALL_DOCTOR_API',
      payload: {
        token: Cookies.get('access_token'),
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardAdd></CardAdd>
        </div>
      </div>
    </>
  );
}
