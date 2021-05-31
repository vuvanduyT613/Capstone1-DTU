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
import { useTranslation } from 'react-i18next';
import ListProject from './components/listProject';
import Search from './components/Search';

interface Props {}

export function ClinicPage(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const [textSearch, setTextSearch] = React.useState('');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
