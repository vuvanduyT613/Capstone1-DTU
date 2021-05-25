import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { rootState } from 'store/reducers';
import { useDispatch, /*connect,*/ useSelector } from 'react-redux';
import CardAdd from '../../components/Cards/CardSettings';
import { Redirect } from 'react-router-dom';

export default function Tables(props) {
  const { /*email, phoneNumber,*/ step } = useSelector(
    (state: rootState) => state.authenReducer.signUp,
  );
  const dispatch = useDispatch();
  const { search } = useLocation();
  const data = queryString.parse(search);

  const onSubmit = values => {
    Object.keys(data).length > 0
      ? dispatch({
          type: 'UPDATE_BY_ID',
          payload: values,
        })
      : dispatch({
          type: 'UPDATE_FIELD_SIGN_UP_API',
          payload: values,
        });
  };

  return (
    <>
      {step === 0 ? (
        <Redirect to={`/admin/${props.match.params.slug}`} />
      ) : (
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <CardAdd
              slug={props.match.params.slug}
              data={Object.keys(data).length > 0 ? data : ''}
              onSubmit={onSubmit}
            ></CardAdd>
          </div>
        </div>
      )}
    </>
  );
}
