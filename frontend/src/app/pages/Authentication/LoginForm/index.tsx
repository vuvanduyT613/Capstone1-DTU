import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import Images from '../../../asset/image';
import useStyles from './styles';
import { Grid } from '@material-ui/core';
import { requestPostLogin } from 'utils/request';
import { Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
export interface loginFormInterface {
  handleTosignUp: Function;
}

const LoginForm = (props: loginFormInterface) => {
  const { handleTosignUp } = props;
  const classes = useStyles();
  const [isLoginForm, setIsLoginForm] = useState({
    email: '',
    password: '',
  });
  const [role, setRole] = useState('');
  const [cookies, setCookies] = useCookies(['JWT']);
  const [showPass, setShowPass] = useState(false);
  const signIn = async () => {
    //@ts-ignore
    const { data } = await requestPostLogin(
      `${process.env.REACT_APP_API_ENDPOINT}/auth/login`,
      isLoginForm,
    );

    let expires = new Date();
    //@ts-ignore
    setCookies('access_token', data.tokens.access.token);
    setCookies('access_refresh', data.tokens.refresh.token);
    //@ts-ignore
    setRole(data.user.role);
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
        <Redirect to="/admin" />
      ) : (
        <></>
      )}
      <CustomInput
        typeInput="email"
        name="email"
        placeholder="Email"
        handlerChange={handlerChange}
        iconLeft={Images.icMail.default}
      />
      <CustomInput
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
