import React, { useRef, useState, forwardRef /* useEffect, useState */ } from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import styled from 'styled-components/macro';
import Header from './Header';
import CustomInput from './CustomInput';
import Images from 'app/asset/image/';
import { Formik } from 'formik';
import _get from 'lodash/get';
import Cookies from 'js-cookie';

import DatePicker from 'react-datepicker';
import useStyles from './styles';
interface Tranfer {}

const ListPersonal = (props: Tranfer) => {
  const [disable, setDisable] = useState(true);
  const [page, setPage] = useState(1);
  const [isXs, setXs] = useState(12);
  const refToAvatar = useRef<HTMLInputElement>(null);
  const classes = useStyles();

  const CustomInputDatePicker = forwardRef((props: any, ref) => {
    return (
      <input
        style={{
          border: '0px',
          height: '50px',
          width: '100% ',
          textIndent: '2px',
          outline: 'none',
          padding: '15.5px 14px',
          fontFamily: 'Segoe UI',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '14px',
          lineHeight: '21px',
          color: '#333333',
          '&:active': {
            border: '0px',
          },
        }}
        {...props}
        ref={ref}
      />
    );
  });

  const handleChooseAvatar = () => {
    if (refToAvatar.current !== null) {
      refToAvatar.current.click();
    }
  };

  const signUp = async values => {};

  return (
    <>
      <Formik
        initialValues={{
          avatar: Cookies.get('user_avatar') ? Cookies.get('user_avatar') : '',
          avatarLocal: Cookies.get('user_avatar') ? Cookies.get('user_avatar') : '',
          dateOfBirth: Cookies.get('user_date') ? new Date(Cookies.get('user_date')) : '',
        }}
        //validationSchema={Schema}
        onSubmit={signUp}
      >
        {({ handleChange, values, setFieldValue, errors, handleSubmit }) => (
          <Wrapper>
            <WrapperProfile>
              <Grid xs={6}>
                {page === 1 || page === 2 ? (
                  <>
                    <Header title={page === 1 ? 'Profile' : 'Edit personal profile'} />
                    <WrapperLeft>
                      <CustomInput
                        defaultvalue={Cookies.get('user_name')}
                        off={disable}
                        lablel={'First and last name'}
                      />

                      <p
                        style={{
                          fontFamily: ' Abhaya Libre Medium',
                          fontStyle: 'normal',
                          fontWeight: 500,
                          fontSize: '14px',
                          lineHeight: '19px',
                          color: '#0B0D31',
                        }}
                      >
                        Date of birth
                      </p>
                      <DatePicker
                        wrapperClassName={classes.wrapper}
                        selected={values.dateOfBirth}
                        onChange={date => {
                          setFieldValue('dateOfBirth', date);
                        }}
                        disabled={disable}
                        isClearable={true}
                        placeholderText="Date Time"
                        customInput={<CustomInputDatePicker />}
                      />
                      <CustomInput
                        defaultvalue={Cookies.get('user_phone')}
                        off={disable}
                        lablel={'Phone number'}
                      />

                      <CustomInput
                        defaultvalue={Cookies.get('email')}
                        off={disable}
                        lablel={'Email'}
                      />
                    </WrapperLeft>
                  </>
                ) : page === 3 ? (
                  <>
                    <Header title={'Change the password'} />
                    <WrapperLeft>
                      <CustomInput
                        off={disable}
                        lablel={'Old password'}
                        iconRight={Images.iconOpenPass.default}
                      />
                      <CustomInput
                        off={disable}
                        lablel={'A new password'}
                        iconRight={Images.iconOpenPass.default}
                      />
                      <CustomInput
                        off={disable}
                        lablel={'Confirm new password'}
                        iconRight={Images.iconOpenPass.default}
                      />
                    </WrapperLeft>

                    <WrapperItem3>
                      <Grid xs={6}>
                        <ItemCancel
                          onClick={() => {
                            setDisable(true);
                            setPage(1);
                          }}
                        >
                          <div>
                            <p>Cancel</p>
                          </div>
                        </ItemCancel>
                      </Grid>
                      <Grid xs={6}>
                        <ItemSave
                          onClick={() => {
                            setDisable(false);
                          }}
                        >
                          <div>
                            <p>Save</p>
                          </div>
                        </ItemSave>
                      </Grid>
                    </WrapperItem3>
                  </>
                ) : (
                  <></>
                )}
              </Grid>
              <Grid xs={6}>
                {page === 1 || page === 2 ? (
                  <Grid xs={12} style={{ marginTop: '40%' }}>
                    <input
                      disabled={disable}
                      hidden
                      type="file"
                      accept="image/*"
                      name="avatar"
                      onChange={e => {
                        //@ts-ignore

                        const file = e.target.files[0];
                        const fileLocal = URL.createObjectURL(file);
                        setFieldValue('avatar', file);
                        setFieldValue('avatarLocal', fileLocal);
                      }}
                      ref={refToAvatar}
                    />
                    {
                      //@ts-ignore
                      values.avatar ? (
                        <>
                          <img src={values.avatarLocal} className={classes.avatar} />
                          <div onClick={handleChooseAvatar} className={classes.changeImage}>
                            Change image
                          </div>
                        </>
                      ) : (
                        <div className={classes.areaUploadAvatar} onClick={handleChooseAvatar}>
                          <img src={Images.iconAdd.default} style={{ margin: 'auto' }} />
                        </div>
                      )
                    }
                  </Grid>
                ) : (
                  <></>
                )}

                <WrapperButton>
                  {page === 1 ? (
                    <>
                      {' '}
                      <Grid xs={6}>
                        <ItemExit
                          onClick={() => {
                            setDisable(false);
                            setPage(3);
                          }}
                        >
                          <div>
                            <p>Change paswword</p>
                          </div>
                        </ItemExit>
                      </Grid>
                      <Grid xs={6}>
                        <ItemExit
                          onClick={() => {
                            setDisable(false);
                            setPage(2);
                          }}
                        >
                          <div>
                            <p>Edit</p>
                          </div>
                        </ItemExit>
                      </Grid>{' '}
                    </>
                  ) : page === 2 ? (
                    <>
                      <Grid xs={6}>
                        <ItemCancel
                          onClick={() => {
                            setDisable(true);
                            setPage(1);
                          }}
                        >
                          <div>
                            <p>Cancel</p>
                          </div>
                        </ItemCancel>
                      </Grid>
                      <Grid xs={6}>
                        <ItemSave
                          onClick={() => {
                            setDisable(false);
                          }}
                        >
                          <div>
                            <p>Save</p>
                          </div>
                        </ItemSave>
                      </Grid>
                    </>
                  ) : (
                    <></>
                  )}
                </WrapperButton>
              </Grid>
            </WrapperProfile>
          </Wrapper>
        )}
      </Formik>
    </>
  );
};

const WrapperLeft = styled.div`
  padding: 30px;
`;

const WrapperItem3 = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  width: 60%;
  height: 600px;
  background: #fdfdfd;
  margin-left: 19%;
  margin-top: 7%;
  border-radius: 4px;
`;

const WrapperProfile = styled.div`
  width: 100%;
  padding: 0px 30px;
  display: flex;
`;

const WrapperButton = styled.div`
  width: 100%;
  padding: 0px 30px;
  display: flex;
  margin-top: 10%;
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
    width: 100%;
    height: 40px;
    /* #00358E */

    background: #d4ddfc;
    opacity: 1;
    border-radius: 4px;
    display: flex;
    justify-content: center;

    svg {
      margin: auto 9px auto 0px;
    }

    p {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: 600;
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

const ItemCancel = styled.a`
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
    width: 100%;
    height: 40px;
    /* #00358E */

    background: #fff;
    opacity: 1;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    border: 1px solid #00358e;
    svg {
      margin: auto 9px auto 0px;
    }

    p {
      font-family: Abhaya Libre Medium;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      display: flex;
      align-items: center;
      text-align: center;

      /* #00358E */

      color: #00358e;
    }
  }
`;

const ItemSave = styled.a`
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
    width: 100%;
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
      font-family: Abhaya Libre Medium;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      display: flex;
      align-items: center;
      text-align: center;

      /* #FFFFFF */

      color: #fdfdfd;
    }
  }
`;

export default ListPersonal;
