/**
 *
 * Delivery
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import Cookies from 'js-cookie';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';
import ListTranfer from './components/Tranfer';
import { NavBar } from 'app/components/NavBar';
import { messages } from './messages';
import { PageWrapper } from 'app/components/PageWrapper';
import { useDispatch, useSelector } from 'react-redux';

interface Props {}

export function Delivery(props: Props) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    dispatch({
      type: 'GET_ALL_DELIVERY_API',
      payload: {
        token: Cookies.get('access_token'),
        page: 1,
        limit: 9,
        userID: Cookies.get('user_id'),
      },
    });
  });

  return (
    <>
      <Helmet>
        <title>Delivery Page</title>
        <meta name="description" content="Homepage" />
      </Helmet>
      <Div>
        <NavBar />
        <ListTranfer />
      </Div>
      <PageWrapper>
        {Cookies.get('access_token') && Cookies.get('role') === 'user' ? (
          <></>
        ) : (
          <Redirect to="/auth" />
        )}
      </PageWrapper>
    </>
  );
}

const Div = styled.div``;
