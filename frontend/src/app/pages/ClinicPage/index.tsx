/**
 *
 * ClinicPage
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { useDispatch } from 'react-redux';
import ListProject from './components/listProject';
import Search from './components/Search';

interface Props {}

export function ClinicPage(props: Props) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    dispatch({
      type: 'GET_ALL_CLINIC_API',
      payload: {
        token: Cookies.get('access_token'),
        page: 1,
        limit: 6,
      },
    });
  });

  return (
    <>
      <Helmet>
        <title>Clinic Page</title>
        <meta name="description" content="Homepage" />
      </Helmet>
      <Div>
        <NavBar />
        <ListProject />
      </Div>
      <Search />
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
