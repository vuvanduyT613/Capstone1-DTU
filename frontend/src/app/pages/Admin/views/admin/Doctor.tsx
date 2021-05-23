import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import CardDoctor from '../../components/Cards/CardMain ';

export default function Tables() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({
      type: 'GET_ALL_DOCTOR_API',
      payload: {
        token: Cookies.get('access_token'),
        page: page,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const actionPage = page => {
    setPage(page);
    dispatch({
      type: 'GET_ALL_DOCTOR_API',
      payload: {
        token: Cookies.get('access_token'),
        page: page,
      },
    });
  };

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardDoctor
            button={'ADD DOCTOR'}
            column={['Name', 'Age', 'Address', 'Phone', 'Email', 'Action']}
            index={5}
            fucPage={actionPage}
          />
        </div>
      </div>
    </>
  );
}
