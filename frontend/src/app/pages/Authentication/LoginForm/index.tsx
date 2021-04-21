import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import Images from '../../../asset/image';
import useStyles from './styles';

import { useSelector, useDispatch } from 'react-redux';
// import { Grid, Typography, Dialog, IconButton } from '@material-ui/core';
import { rootState } from 'store/reducers';
import { Grid } from '@material-ui/core';
import { UPDATE_FIELD_SIGN_IN } from 'store/reducers/Authetication/actionTypes';

export interface loginFormInterface {
  handleTosignUp: Function;
}

const LoginForm = (props: loginFormInterface) => {
  const { handleTosignUp } = props;
  const dispatch = useDispatch();
  const [isLoginForm, setIsLoginForm] = useState({
    email: '',
    password: '',
  });
  const { email, password } = useSelector(
    (state: rootState) => state.authenReducer.signUp,
  );
  const classes = useStyles();
  const [showPass, setShowPass] = useState(false);
  const signIn = e => {
    dispatch({
      type: UPDATE_FIELD_SIGN_IN,
      payload: {
        email: isLoginForm.email,
        password: isLoginForm.password,
      },
    });
  };

  const handlerChange = e => {
    const name = e.target.name;
    setIsLoginForm({
      ...isLoginForm,
      [name]: e.target.value,
    });
  };

  console.log(isLoginForm);
  return (
    <>
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
