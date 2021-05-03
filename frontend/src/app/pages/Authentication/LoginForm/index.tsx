import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import Images from '../../../asset/image';
import useStyles from './styles';
import { Grid } from '@material-ui/core';
import { requestPostLogin } from 'utils/request';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';

export interface loginFormInterface {
  handleTosignUp: Function;
}

const LoginForm = (props: loginFormInterface) => {
  const { handleTosignUp } = props;
  const classes = useStyles();
  const [isLoginForm, setIsLoginForm] = useState({
    email: Cookies.get('email') ? Cookies.get('email') : '',
    password: Cookies.get('password') ? Cookies.get('password') : '',
  });
  const [role, setRole] = useState('');
  const [showPass, setShowPass] = useState(false);

  const signIn = async () => {
    try {
      //@ts-ignore
      const { data } = await requestPostLogin(
        `${process.env.REACT_APP_API_ENDPOINT}/auth/login`,
        isLoginForm,
      );
      Cookies.set('email', isLoginForm.email);
      Cookies.set('password', isLoginForm.password);
      Cookies.set('access_token', data.tokens.access.token);
      Cookies.set('access_refresh', data.tokens.refresh.token);
      //@ts-ignore
      setRole(data.user.role);
    } catch (err) {
      toast.error(' ✘ email and password incorrect!');
    }
  };

  const handlerChange = e => {
    const name = e.target.name;
    setIsLoginForm({
      ...isLoginForm,
      [name]: e.target.value,
    });
  };

  return (
    <>
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
        defaultvalue={isLoginForm.email}
        typeInput="email"
        name="email"
        placeholder="Email"
        handlerChange={handlerChange}
        iconLeft={Images.icMail.default}
      />
      <CustomInput
        defaultvalue={isLoginForm.password}
        typeInput={showPass ? 'text' : 'password'}
        placeholder="Mật khẩu"
        name="password"
        iconLeft={Images.iconPass.default}
        iconRight={Images.iconOpenPass.default}
        handlerChange={handlerChange}
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
          <button className={classes.btnLogin} onClick={signIn}>
            Sign in
          </button>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;
