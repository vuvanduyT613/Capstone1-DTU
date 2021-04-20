/**
 *
 * Authentication
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import Images from '../../asset/image';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import { rootState } from '../../../store/reducers';
import LoginForm from './LoginForm';
import SignUpStepper from './SignUpStepper';

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
          <img src={Images.logo.default} className={classes.logo} />
          <div className={classes.title}>
            {isLoginForm
              ? 'Đăng nhập với'
              : signUp.step === 1
              ? 'Hãy bắt đầu với số điện thoại của bạn'
              : signUp.step === 2
              ? 'Nhập mã xác minh số được gửi đến bạn'
              : signUp.step === 3
              ? 'Cho chúng tôi biết các thông tin về bạn'
              : signUp.step === 4
              ? 'Bây giờ hãy đặt mật khẩu của bạn'
              : signUp.step === 5
              ? 'Thêm hình ảnh đại diện của bạn'
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
        <div className={classes.welcomeTitle}>Chào mừng bạn</div>
        <div className={classes.welcomeTitle}>đến với Medical Schedule</div>
        <div className={classes.welcomeDescription}>
          Nền tảng y tế chăm sóc sức khỏe toàn diện
        </div>
      </Grid>
    </Grid>
  );
}

const Div = styled.div``;
