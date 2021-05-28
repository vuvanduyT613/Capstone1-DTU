import * as React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { List } from 'app/components/List';
import styled from 'styled-components/macro';
import { Pagination } from 'app/components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from 'store/reducers';
import { Dialog, DialogTitle } from '@material-ui/core';

export function HomePage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state: rootState) => state.userReducer.getAllUser);
  const { step, email } = useSelector((state: rootState) => state.authenReducer.signUp);
  const [page, setPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    dispatch({
      type: 'GET_ALL_DOCTOR_API',
      payload: {
        token: Cookies.get('access_token'),
        page: page,
        limit: 9,
      },
    });
    if (step === 0 && email) {
      handleClickOpen();
      dispatch({
        type: 'UPDATE_FIELD_SIGN_UP',
        payload: {
          step: 1,
        },
      });
    }
  }, [page]);

  const fucPagination = values => {
    dispatch({
      type: 'GET_ALL_DOCTOR_API',
      payload: {
        token: Cookies.get('access_token'),
        page: values,
        limit: 9,
      },
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        fullWidth={true}
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle
          style={{
            fontFamily: 'Abhaya Libre Medium',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '36px',
            color: '#00358E',
            textAlign: 'center',
            marginTop: '10px',
            marginBottom: '-15px',
          }}
          id="draggable-dialog-title"
        >
          SUCCESS BOOKING
        </DialogTitle>
        <WrapperContent>
          <p style={{ fontWeight: 620 }}>
            You have successfully registered for “Associate Professor, Doctor, Senior Doctor{' '}
            {`${email}`}”. Please information in gmail, see you at the clinic!
          </p>
        </WrapperContent>
        <ItemExit
          onClick={() => {
            handleClose();
          }}
        >
          <div>
            <p>Close</p>
          </div>
        </ItemExit>
      </Dialog>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Homepage" />
      </Helmet>
      <NavBar />
      <Content>
        <List data={data} />

        <Pagination
          current={1}
          total={
            Object.keys(data).length > 0
              ? //@ts-ignore
                data.totalResults
              : 12
          }
          fucPagination={fucPagination}
          pageSize={
            Object.keys(data).length > 0
              ? //@ts-ignore
                data.totalPages
              : 10
          }
        />
      </Content>
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

const Content = styled.div`
  width: 82%;
  margin-left: 16%;
  margin-top: -5%;
  background: #fdfdfd;
  border-radius: 4px;
`;

const WrapperContent = styled.div`
  diplay: flex;
  padding: 0px 20px;

  p {
    font-family: Segoe UI;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    display: flex;
    align-items: center;
    text-align: center;
  }
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
  margin-bottom: 10px;

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
    width: 35%;
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
