import React, { useState, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import Images from '../../../asset/image';
import useStyles from './styles';
import { Grid } from '@material-ui/core';
import { rootState } from 'store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { Formik, Form } from 'formik';
export interface loginFormInterface {
  handleTosignUp: Function;
}

const LoginForm = (props: loginFormInterface) => {
  const { role } = useSelector(
    (state: rootState) => state.authenReducer.signIn,
  );
  const dispatch = useDispatch();
  const { handleTosignUp } = props;
  const classes = useStyles();
  const [showPass, setShowPass] = useState(false);

  const signIn = async values => {
    dispatch({
      type: 'UPDATE_FIELD_SIGN_IN',
      payload: {
        email: values.email,
        password: values.password,
      },
    });
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        email: Cookies.get('email') ? Cookies.get('email') : '',
        password: Cookies.get('password') ? Cookies.get('password') : '',
      }}
      onSubmit={signIn}
    >
      {({ handleChange, values, handleSubmit }) => (
        <Form>
          {role === 'admin' ? (
            <Redirect to="/admin" />
          ) : role === 'user' ? (
            <Redirect to="/" />
          ) : (
            <></>
          )}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <CustomInput
            defaultvalue={values.email}
            typeInput="email"
            name="email"
            placeholder="Email"
            handlerChange={e => handleChange(e)}
            iconLeft={Images.icMail.default}
          />
          <CustomInput
            defaultvalue={values.password}
            typeInput={showPass ? 'text' : 'password'}
            placeholder="Mật khẩu"
            name="password"
            iconLeft={Images.iconPass.default}
            iconRight={Images.iconOpenPass.default}
            handlerChange={e => handleChange(e)}
            handleClickRightIcon={() => setShowPass(!showPass)}
          />
          <div className={classes.forgotPass}> Forgot password? </div>
          <Grid container spacing={3}>
            <Grid container item xs={12} sm={6}>
              <button
                className={classes.btnCreate}
                onClick={() => handleTosignUp()}
              >
                Sign up
              </button>
            </Grid>
            <Grid container item xs={12} sm={6}>
              <button className={classes.btnLogin} onClick={() => handleSubmit}>
                Sign in
              </button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
