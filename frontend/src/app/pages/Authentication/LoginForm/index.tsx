import React, { useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput';
import Images from '../../../asset/image';
import useStyles from './styles';

// import { useSelector } from 'react-redux'
// import { Grid, Typography, Dialog, IconButton } from '@material-ui/core';
// import { rootState } from 'store/reducers';
import { Grid, Typography, Dialog, IconButton } from '@material-ui/core';
import { useDispatch, connect, useSelector } from 'react-redux';
//import { UPDATE_FIELD_SIGN_UP } from 'store/reducers/Authetication/actionTypes';

export interface loginFormInterface {
  handleTosignUp: Function;
}

const LoginForm = (props: loginFormInterface) => {
  const { handleTosignUp } = props;
  const dispatch = useDispatch();
  // const classes= useStyles()
  // const [isLoginForm, setIsLoginForm] = useState(true)
  // const {signUp} =useSelector( (state:rootState) =>state.authenReducer)
  const classes = useStyles();
  const [showPass, setShowPass] = useState(false);
  return (
    <div>
      <CustomInput
        typeInput="email"
        placeholder="Email"
        iconLeft={Images.icMail.default}
      />
      <CustomInput
        typeInput={showPass ? 'text' : 'password'}
        placeholder="Mật khẩu"
        iconLeft={Images.iconPass.default}
        iconRight={Images.iconOpenPass.default}
        handleClickRightIcon={() => setShowPass(!showPass)}
      />
      <div className={classes.forgotPass}> Quên mật khẩu? </div>
      <Grid container spacing={3}>
        <Grid container item xs={12} sm={6}>
          <button
            className={classes.btnCreate}
            onClick={() => handleTosignUp()}
          >
            Tạo tài khoản
          </button>
        </Grid>
        <Grid container item xs={12} sm={6}>
          <button className={classes.btnLogin} onClick={() => alert('Login')}>
            Đăng nhập
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginForm;
