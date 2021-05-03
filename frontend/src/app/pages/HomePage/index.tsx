import * as React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { List } from 'app/components/List';
import { News } from 'app/components/News';
import styled from 'styled-components/macro';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Homepage" />
      </Helmet>
      <NavBar />
      <Content>
        <List />
      </Content>

      <ContentNews>
        <News />
      </ContentNews>
      <PageWrapper>
        {Cookies.get('access_token') ? <></> : <Redirect to="/auth" />}
      </PageWrapper>
    </>
  );
}

const Content = styled.div`
  position: absolute;
  right: 10%;
  top: 300px;
`;

const ContentNews = styled.div`
  position: absolute;
  left: 20%;
  top: 300px;
`;
