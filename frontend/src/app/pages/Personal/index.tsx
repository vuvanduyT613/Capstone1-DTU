/**
 *
 * Personal
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import Cookies from 'js-cookie';
import { Helmet } from 'react-helmet-async';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'app/components/PageWrapper';
import { NavBar } from 'app/components/NavBar';
import { messages } from './messages';
import ListPersonal from './components/Personal';
interface Props {}

export function Personal(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Delivery Page</title>
        <meta name="description" content="Homepage" />
      </Helmet>
      <NavBar />
      <Div>
        <ListPersonal />
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
