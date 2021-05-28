/**
 *
 * Detail
 *
 */
import * as React from 'react';
import Cookies from 'js-cookie';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { PopUp } from 'app/components/PopUp';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';

interface Props {}

export function Detail(props: Props) {
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { search } = useLocation();
  const data = queryString.parse(search);

  return (
    <>
      {Object.keys(data).length > 0 ? (
        <>
          <Dialog
            fullWidth={true}
            maxWidth="sm"
            open={open}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
          >
            <PopUp />
          </Dialog>
          <Helmet>
            <title>Home Page</title>
            <meta name="description" content="Homepage" />
          </Helmet>
          <NavBar />
          <ContentOutline>
            <h2>Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp {`${data.name}`}</h2>
          </ContentOutline>
          <Content>
            <br></br>
            <Img src={`${data?.avatar}`}></Img>
            <ContentText>
              <div style={{ display: 'flex' }}>
                {' '}
                <h4>Giá Khám : </h4>
                <p style={{ margin: 'auto 0px auto 9px' }}>{`${data.price}`} </p>
              </div>
              <p>
                <h4>Giới thiệu bác sĩ</h4>
              </p>
              <p>{`${data.detail}`}</p>
            </ContentText>
            <WrapperButton></WrapperButton>
            <ItemExit
              onClick={() => {
                handleClickOpen();
              }}
            >
              <div>
                <p>Medical register</p>
              </div>
            </ItemExit>
          </Content>
          <PageWrapper>
            {Cookies.get('access_token') && Cookies.get('role') === 'user' ? (
              <></>
            ) : (
              <Redirect to="/auth" />
            )}
          </PageWrapper>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

const Content = styled.div`
  width: 82%;
  height: 900px;
  margin-left: 16%;
  margin-top: 0%;
  background: #fdfdfd;
  border-radius: 4px;
`;

const ContentOutline = styled.div`
  width: 82%;
  margin-left: 16%;
  margin-top: -5%;
  border-radius: 4px;
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

const ItemExit = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
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
    width: 15%;
    height: 40px;
    /* #00358E */

    background: #00358e;
    opacity: 1;
    border-radius: 4px;
    display: flex;
    justify-content: center;

    svg {
      margin: auto 9px auto 0px;
    }

    p {
      font-family: Abhaya Libre SemiBold;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      /* identical to box height, or 150% */

      display: flex;
      align-items: center;
      text-align: center;

      /* Background White */

      color: #fdfdfd;
    }
  }
`;
