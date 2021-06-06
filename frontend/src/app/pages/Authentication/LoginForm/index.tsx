import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import Images from '../../../asset/image';
import useStyles from './styles';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Formik, Form } from 'formik';
import SwitchMode from 'react-switch';
export interface loginFormInterface {
  handleTosignUp: Function;
}

const LoginForm = (props: loginFormInterface) => {
  const dispatch = useDispatch();
  const { handleTosignUp } = props;
  const classes = useStyles();
  const [showPass, setShowPass] = useState(false);
  const [checked, setChecked] = useState(false);

  const signIn = async values => {
    dispatch({
      type: 'UPDATE_FIELD_SIGN_IN',
      payload: {
        email: values.email,
        password: values.password,
        check: checked,
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
          {Cookies.get('role') === 'admin' || Cookies.get('role') === 'doctor' ? (
            <Redirect to="/admin" />
          ) : Cookies.get('role') === 'user' ? (
            <Redirect to="/" />
          ) : (
            <></>
          )}
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
            placeholder="password"
            name="password"
            iconLeft={Images.iconPass.default}
            iconRight={Images.iconOpenPass.default}
            handlerChange={e => handleChange(e)}
            handleClickRightIcon={() => setShowPass(!showPass)}
          />
          <div className={classes.forgotPass} onClick={() => handleTosignUp(3)}>
            {' '}
            Forgot password?
          </div>

          <Grid container spacing={3}>
            <Grid container item xs={12} sm={6}>
              <button className={classes.btnCreate} onClick={() => handleTosignUp(2)}>
                Sign up
              </button>
            </Grid>
            <Grid container item xs={12} sm={6}>
              <button className={classes.btnLogin} onClick={() => handleSubmit}>
                Sign in
              </button>
            </Grid>
          </Grid>
          <div style={{ display: 'flex', position: 'absolute', bottom: '20px', right: '20px' }}>
            <SwitchMode
              checked={checked}
              onChange={() => setChecked(!checked)}
              handleDiameter={28}
              offColor="#08f"
              onColor="#0ff"
              offHandleColor="#0ff"
              onHandleColor="#08f"
              height={40}
              width={80}
              borderRadius={6}
              activeBoxShadow="0px 0px 1px 2px #fffc35"
              uncheckedIcon={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    fontSize: 13,
                    color: '#fff',
                    paddingRight: 2,
                  }}
                >
                  User
                </div>
              }
              checkedIcon={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    fontSize: 13,
                    fontWeight: 500,
                    color: '#000',
                    paddingRight: 2,
                  }}
                >
                  Doctor
                </div>
              }
              uncheckedHandleIcon={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    fontSize: 20,
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M252.352 246.633C286.234 246.633 315.57 234.48 339.547 210.504C363.516 186.531 375.672 157.199 375.672 123.312C375.672 89.4375 363.52 60.1016 339.543 36.1211C315.566 12.1523 286.23 0 252.352 0C218.465 0 189.133 12.1523 165.16 36.125C141.188 60.0977 129.031 89.4336 129.031 123.312C129.031 157.199 141.188 186.535 165.16 210.508C189.141 234.477 218.477 246.633 252.352 246.633V246.633ZM186.379 57.3398C204.773 38.9453 226.352 30.0039 252.352 30.0039C278.348 30.0039 299.93 38.9453 318.328 57.3398C336.723 75.7383 345.668 97.3203 345.668 123.312C345.668 149.312 336.723 170.891 318.328 189.289C299.93 207.688 278.348 216.629 252.352 216.629C226.359 216.629 204.781 207.684 186.379 189.289C167.98 170.895 159.035 149.312 159.035 123.312C159.035 97.3203 167.98 75.7383 186.379 57.3398Z"
                      fill="black"
                    />
                    <path
                      d="M468.129 393.703C467.438 383.727 466.039 372.844 463.98 361.352C461.902 349.773 459.227 338.828 456.023 328.824C452.711 318.484 448.215 308.273 442.648 298.488C436.879 288.332 430.098 279.488 422.488 272.211C414.531 264.598 404.789 258.477 393.523 254.012C382.297 249.57 369.855 247.32 356.547 247.32C351.32 247.32 346.266 249.465 336.504 255.82C330.496 259.738 323.469 264.27 315.625 269.281C308.918 273.555 299.832 277.559 288.609 281.184C277.66 284.727 266.543 286.523 255.566 286.523C244.598 286.523 233.48 284.727 222.523 281.184C211.312 277.562 202.223 273.559 195.527 269.285C187.758 264.32 180.727 259.789 174.629 255.816C164.875 249.461 159.82 247.316 154.594 247.316C141.281 247.316 128.844 249.57 117.621 254.016C106.363 258.473 96.6172 264.594 88.6523 272.215C81.043 279.496 74.2617 288.336 68.4961 298.488C62.9375 308.273 58.4375 318.48 55.125 328.828C51.9258 338.832 49.25 349.773 47.1719 361.352C45.1094 372.828 43.7148 383.715 43.0234 393.715C42.3438 403.492 42 413.668 42 423.949C42 450.676 50.4961 472.312 67.25 488.27C83.7969 504.016 105.688 512 132.316 512H378.848C405.469 512 427.359 504.016 443.91 488.27C460.668 472.324 469.164 450.68 469.164 423.945C469.16 413.629 468.813 403.453 468.129 393.703V393.703ZM423.223 466.531C412.289 476.938 397.773 481.996 378.844 481.996H132.316C113.383 481.996 98.8672 476.938 87.9375 466.535C77.2148 456.328 72.0039 442.395 72.0039 423.949C72.0039 414.355 72.3203 404.883 72.9531 395.789C73.5703 386.867 74.832 377.066 76.7031 366.652C78.5508 356.367 80.9023 346.715 83.6992 337.977C86.3828 329.598 90.043 321.301 94.582 313.309C98.9141 305.691 103.898 299.156 109.398 293.891C114.543 288.965 121.027 284.934 128.668 281.91C135.734 279.113 143.676 277.582 152.297 277.352C153.348 277.91 155.219 278.977 158.25 280.953C164.418 284.973 171.527 289.559 179.387 294.578C188.246 300.227 199.66 305.328 213.297 309.73C227.238 314.238 241.457 316.527 255.57 316.527C269.684 316.527 283.906 314.238 297.84 309.734C311.488 305.324 322.898 300.227 331.77 294.57C339.812 289.43 346.723 284.977 352.891 280.953C355.922 278.98 357.793 277.91 358.844 277.352C367.469 277.582 375.41 279.113 382.48 281.91C390.117 284.934 396.602 288.969 401.746 293.891C407.246 299.152 412.23 305.688 416.562 313.312C421.105 321.301 424.77 329.602 427.449 337.973C430.25 346.723 432.605 356.371 434.449 366.648C436.316 377.082 437.582 386.887 438.199 395.793V395.801C438.836 404.859 439.156 414.328 439.16 423.949C439.156 442.398 433.945 456.328 423.223 466.531V466.531Z"
                      fill="black"
                    />
                  </svg>
                </div>
              }
              checkedHandleIcon={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    color: 'red',
                    fontSize: 18,
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9999 0C9.41389 0 7.31055 2.10392 7.31055 4.68995V7.11969C7.31055 9.70591 9.41389 11.8098 11.9999 11.8098C14.5861 11.8098 16.6893 9.70591 16.6893 7.11969V4.68995C16.6893 2.10392 14.5861 0 11.9999 0Z"
                      fill="white"
                    />
                    <path
                      d="M22.3417 17.9212C20.8401 15.3623 18.4399 13.4651 15.5834 12.5793C15.5171 12.5587 15.4455 12.5762 15.3962 12.625C14.0673 13.9352 12.4162 14.9574 12.0034 15.2043C11.5627 14.9226 9.70668 13.7128 8.60326 12.625C8.55411 12.5762 8.48192 12.5587 8.41606 12.5793C5.55912 13.4653 3.15914 15.3625 1.6581 17.9214C1.62373 17.98 1.62373 18.0527 1.6581 18.1113C3.78967 21.7435 7.75232 23.9999 11.9997 23.9999C16.2473 23.9999 20.2101 21.7435 22.3417 18.1113C22.3763 18.0526 22.3763 17.9798 22.3417 17.9212ZM18.3777 19.3201C18.3777 19.4236 18.2792 19.5027 18.1759 19.5027H16.9059C16.8024 19.5027 16.6895 19.5916 16.6895 19.6953V21.0087C16.6895 21.112 16.6342 21.1909 16.5307 21.1909H15.39C15.2865 21.1909 15.189 21.112 15.189 21.0087V19.6953C15.1886 19.5918 15.118 19.5027 15.0145 19.5027H13.6897C13.5862 19.5027 13.5006 19.4234 13.5006 19.3201V18.1893C13.5006 18.0858 13.5862 18.0022 13.6897 18.0022H15.0145C15.118 18.0022 15.1886 17.9178 15.1886 17.8141V16.4991C15.1886 16.3956 15.2862 16.314 15.3896 16.314H16.518C16.6213 16.314 16.6893 16.3956 16.6893 16.4991V17.8179C16.6893 17.9216 16.7895 18.0021 16.8932 18.0021H18.1759C18.2792 18.0021 18.3777 18.0896 18.3777 18.1931V19.3201V19.3201Z"
                      fill="white"
                    />
                  </svg>
                </div>
              }
              id="small-radius-switch"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
