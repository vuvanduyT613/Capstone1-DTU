import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import CardDoctor from '../../components/Cards/CardMain ';

export default function Tables() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({
      type: 'GET_ALL_CLINIC_API',
      payload: {
        token: Cookies.get('access_token'),
        page: page,
      },
    });
    dispatch({
      type: 'UPDATE_FIELD_SIGN_UP',
      payload: {
        step: 1,
      },
    });
    dispatch({
      type: 'ADMIN_STATUS',
      payload: {
        token: Cookies.get('access_token'),
        page: 1,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const actionPage = page => {
    setPage(page);
    dispatch({
      type: 'GET_ALL_CLINIC_API',
      payload: {
        token: Cookies.get('access_token'),
        page: page,
      },
    });
  };

  const actionDelete = values => {
    dispatch({
      type: 'DELETE_ALL_CLINIC_API',
      payload: values,
    });
  };

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardDoctor
            button={'ADD CLINIC'}
            column={[
              '',
              'Image',
              'Address',
              'Price',
              'Google Map',
              'Time Working',
              'Doctor',
              'Action',
            ]}
            index={5}
            whoew={2}
            fucPage={actionPage}
            fucDelete={actionDelete}
            to="/admin/clinic/add/clinic"
          />
        </div>
      </div>
    </>
  );
}
