/**
 *
 * Authentication
 *
 */
import * as React from 'react';
import Cookies from 'js-cookie';
import Images from '../../asset/image';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import { rootState } from '../../../store/reducers';
import LoginForm from './LoginForm';
import SignUpStepper from './SignUpStepper';
import Forgot from './Forgot';
import ForgotLast from './ForgotLast';
import 'react-toastify/dist/ReactToastify.css';

interface Props {}

export function Authentication(props: Props) {
  const classes = useStyles();
  const [isLoginForm, setIsLoginForm] = React.useState(1);
  const { signUp } = useSelector((state: rootState) => state.authenReducer);

  return (
    <Grid container className={classes.wrapperAuthen}>
      <Grid
        container
        item
        xs={12}
        sm={8}
        className={classes.formLogin}
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Grid container alignItems="center" direction="column">
          <img
            alt={'img1'}
            src={Images.logo.default}
            className={classes.logo}
          />
          <div className={classes.title}>
            {Cookies.get('forgot_token')
              ? 'Change password'
              : isLoginForm === 1
              ? 'Sign in'
              : isLoginForm === 3
              ? 'Reset your password'
              : signUp.step === 1
              ? "Let's start with your Email"
              : signUp.step === 2
              ? 'Enter the verification code number sent to you'
              : signUp.step === 3
              ? 'Let us know about you'
              : signUp.step === 4
              ? 'Now set your password'
              : signUp.step === 5
              ? 'Add to avatar profile'
              : signUp.step === 6
              ? 'Back to sign in'
              : ''}
          </div>
        </Grid>
        <Grid
          container
          alignItems="center"
          className={classes.innerContent}
          direction="column"
        >
          {Cookies.get('forgot_token') ? (
            <ForgotLast />
          ) : isLoginForm === 1 ? (
            <LoginForm handleTosignUp={value => setIsLoginForm(value)} />
          ) : isLoginForm === 2 ? (
            <SignUpStepper />
          ) : isLoginForm === 3 ? (
            <Forgot />
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={4}
        className={classes.welcome}
        direction="column"
      >
        <div className={classes.welcomeTitle}>Welcome</div>
        <div className={classes.welcomeTitle}>to Medical Schedule</div>
        <div className={classes.welcomeDescription}>
          Comprehensive healthcare medical platform.
        </div>
      </Grid>
    </Grid>
  );
}
