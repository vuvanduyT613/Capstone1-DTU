import * as React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { Masthead } from './Masthead';
import { PageWrapper } from 'app/components/PageWrapper';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Homepage" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        {Cookies.get('access_token') ? <></> : <Redirect to="/auth" />}
      </PageWrapper>
    </>
  );
}
