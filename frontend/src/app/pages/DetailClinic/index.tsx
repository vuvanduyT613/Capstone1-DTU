/**
 *
 * DetailClinic
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { PageWrapper } from 'app/components/PageWrapper';
import { Hot } from 'app/components/Hot';
import { ReactComponent as Heart } from './assets/ic_heart.svg';
import { messages } from './messages';
import { Overview } from './components/Overview';
import { Map } from './components/Map';
import { Examination } from './components/Examination';
import { Strength } from './components/Strength';
import { Grid } from '@material-ui/core';

interface Props {}

export function DetailClinic(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [page, setPage] = React.useState(1);
  const { search } = useLocation();
  const data = queryString.parse(search);

  return (
    <>
      <Helmet>
        <title>Clinic Detail</title>
        <meta name="description" content="Homepage" />
      </Helmet>
      <Div>
        <NavBar />
        <ContentOutline>
          <Grid xs={6}>
            <Hot />
            <h2>Phòng khám Đa khoa Quốc tế Exson {`${data.name}`}</h2>
            <P> Số 722 Sư Vạn Hạnh, phường 12, Quận 10, Tp. Hồ Chí Minh</P>
            <WrapperAction>
              <ActionActive
                onClick={() => {
                  setPage(1);
                }}
              >
                Over view
              </ActionActive>
              <Action
                onClick={() => {
                  setPage(2);
                }}
              >
                Geographical location
              </Action>
              <Action
                onClick={() => {
                  setPage(3);
                }}
              >
                Examination and treatment
              </Action>
              <Action
                onClick={() => {
                  setPage(4);
                }}
              >
                Strengths and expertise
              </Action>
            </WrapperAction>
          </Grid>
          <Grid xs={6}>
            <ItemExit onClick={() => {}}>
              <div>
                <Heart />
                <p>Quan tâm</p>
              </div>
            </ItemExit>
          </Grid>
        </ContentOutline>
        <Content>
          <ContentText>
            {page === 1 ? (
              <Overview />
            ) : page === 2 ? (
              <Map />
            ) : page === 3 ? (
              <Examination />
            ) : (
              <Strength />
            )}
          </ContentText>
          <WrapperButton></WrapperButton>
        </Content>
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

const Content = styled.div`
  width: 82%;
  height: 640px;
  margin-left: 16%;
  margin-top: 1%;
  background: #fdfdfd;
  border-radius: 4px;
`;

const ContentOutline = styled.div`
  width: 82%;
  margin-left: 16%;
  margin-top: -5%;
  border-radius: 4px;
  display: flex;
`;

const P = styled.div`
  cursor: pointer;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;

  /* #727A8E */

  color: #727a8e;
`;
const ContentText = styled.div`
  width: 82%;
  margin: 50px auto auto auto;
`;

const Img = styled.img`
  max-width: 100%;
  height: 340px;
  border-radius: 5px;
  margin: 10px auto auto auto;
  display: flex;
`;

const WrapperButton = styled.div`
  width: 100%;
`;

const ActionActive = styled.a`
  cursor: pointer;
  border-bottom: 1px solid;
  font-family: Abhaya Libre SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Title-Body text */

  color: #315df7;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 30px 0px 0px;
`;

const Action = styled.a`
  cursor: pointer;
  font-family: Abhaya Libre SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Title-Body text */

  color: #333333;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 30px 0px 0px;
`;

const WrapperAction = styled.div`
  margin-top: 10px;
  display: flex;
`;

const ItemExit = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;
  justify-content: flex-end;
  margin-top: 7%;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }

  div {
    width: 127px;
    height: 40px;
    /* #00358E */
    /* #FFFFFF */

    background: #fdfdfd;
    box-shadow: 0px 8px 20px rgba(49, 93, 247, 0.16);
    border-radius: 4px;
    display: flex;
    justify-content: center;

    svg {
      margin: auto 9px auto 0px;
    }

    p {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height, or 150% */

      display: flex;
      align-items: center;

      /* #315DF7 */

      color: #315df7;
    }
  }
`;
