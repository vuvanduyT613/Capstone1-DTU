/**
 *
 * Authentication
 *
 */
import * as React from 'react';
// import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import Images from '../../asset/image';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import { rootState } from '../../../store/reducers';
import LoginForm from './LoginForm';
import SignUpStepper from './SignUpStepper';
import 'react-toastify/dist/ReactToastify.css';

interface Props {}

export function Authentication(props: Props) {
  const classes = useStyles();
  const [isLoginForm, setIsLoginForm] = React.useState(true);
  const { signUp } = useSelector((state: rootState) => state.authenReducer);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

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
            {isLoginForm
              ? 'Sign in'
              : signUp.step === 1
              ? "Let's start with your Email"
              : signUp.step === 2
              ? 'Enter the verification code number sent to you'
              : signUp.step === 3
              ? 'Let us know about you'
              : signUp.step === 4
              ? 'Now set your password'
              : signUp.step === 5
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
          {isLoginForm ? (
            <LoginForm handleTosignUp={() => setIsLoginForm(false)} />
          ) : (
            <SignUpStepper />
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
