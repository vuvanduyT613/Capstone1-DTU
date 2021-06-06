/**
 *
 * SearchInterested
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'app/components/PageWrapper';
import { messages } from './messages';
import Cookies from 'js-cookie';
import ListProduct from './components/listProject';

interface Props {}

export function SearchInterested(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Search Page</title>
        <meta name="description" content="Homepage" />
      </Helmet>
      <Div>
        <NavBar number={2} />
        <ListProduct />
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
