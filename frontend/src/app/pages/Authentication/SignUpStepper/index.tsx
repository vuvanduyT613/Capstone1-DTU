import React, { useState, useRef } from 'react';
import CustomInput from '../components/CustomInput';
import Images from '../../../asset/image';
import ReactCodeInput from 'react-verification-code-input';
import useStyles from './styles';
import { rootState } from 'store/reducers';
import { useDispatch, /*connect,*/ useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import Countdown from 'react-countdown';

export interface loginFormInterface {
  handleTosignUp: Function;
}

const SignUpStepper = () => {
  const { /*email, phoneNumber,*/ step } = useSelector(
    (state: rootState) => state.authenReducer.signUp,
  );
  const { code, email } = useSelector(
    (state: rootState) => state.authenReducer.email,
  );
  const dispatch = useDispatch();
  const [codeEnter, setCodeEnter] = useState({ code: 0 });
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const classes = useStyles();

  const handleStep = moveStep => {
    if (moveStep < 0) {
      step > 1 &&
        dispatch({
          type: 'UPDATE_FIELD_SIGN_UP',
          payload: {
            step: step + moveStep,
          },
        });
    } else {
      step < 4 &&
        dispatch({
          type: 'UPDATE_FIELD_SIGN_UP',
          payload: {
            step: step + moveStep,
          },
        });
    }
  };

  const sendEmail = email => {
    if (email) {
      toast.success(`Success step ${step}/4 !`);
      handleStep(1);
      dispatch({
        type: 'UPDATE_FIELD_SIGN_UP_SEND_EMAIL',
        payload: {
          email: email,
        },
      });
    } else toast.error('Please enter gmail for authentication.!');
  };

  const codeEmail = () => {
    if (codeEnter.code === code) {
      toast.success(`Success step ${step}/4 !`);
      handleStep(1);
    } else toast.error('Authentication code is incorrect.!');
  };

  const check = err => {
    err
      ? toast.error(err)
      : toast.success(`Success step ${step}/4 !`) && handleStep(1);
  };

  const signUp = values => {
    dispatch({
      type: 'UPDATE_FIELD_SIGN_UP_API',
      payload: {
        name: values.name,
        email: values.email,
        password: values.password,
      },
    });
  };

  return (
    <Formik
      initialValues={{
        email: email,
        name: '',
        password: '',
        changepassword: '',
        avatar: '',
      }}
      validationSchema={Schema}
      onSubmit={signUp}
    >
      {({ handleChange, values, handleSubmit, errors }) => (
        <Form className={classes.wrapperForm}>
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
          <div className={classes.wrapperSignUp}>
            {step === 1 ? (
              <CustomInput
                defaultvalue={values.email}
                name="email"
                typeInput="email"
                iconLeft={Images.icMail.default}
                handlerChange={e => handleChange(e)}
              />
            ) : step === 2 ? (
              <>
                <ReactCodeInput
                  className={classes.otpCode}
                  type="number"
                  onChange={e => setCodeEnter({ code: Number(e) })}
                  fields={4}
                />
                <div className={classes.sentCode}>
                  Resend code in{' '}
                  <span className={classes.time}>
                    <Countdown date={Date.now() + 220000} />
                  </span>
                </div>
              </>
            ) : step === 3 ? (
              <>
                <CustomInput
                  off={true}
                  defaultvalue={values.email}
                  typeInput="email"
                  iconLeft={Images.icMail.default}
                />
                <CustomInput
                  defaultvalue={values.name}
                  name="name"
                  iconLeft={Images.icPerson.default}
                  handlerChange={e => handleChange(e)}
                />
              </>
            ) : step === 4 ? (
              <>
                <CustomInput
                  name="password"
                  defaultvalue={values.password}
                  typeInput={showPass ? 'text' : 'password'}
                  placeholder="Password"
                  iconLeft={Images.iconPass.default}
                  iconRight={Images.iconOpenPass.default}
                  handlerChange={e => handleChange(e)}
                  handleClickRightIcon={() => setShowPass(!showPass)}
                />
                <CustomInput
                  name="changepassword"
                  defaultvalue={values.changepassword}
                  typeInput={showPassConfirm ? 'text' : 'password'}
                  placeholder="changepassword"
                  iconLeft={Images.iconPass.default}
                  iconRight={Images.iconOpenPass.default}
                  handlerChange={e => handleChange(e)}
                  handleClickRightIcon={() =>
                    setShowPassConfirm(!showPassConfirm)
                  }
                />
              </>
            ) : (
              <> </>
            )}
            <button
              className={classes.continueBtn}
              onClick={() => {
                switch (step) {
                  case 1:
                    sendEmail(values.email);
                    break;
                  case 2:
                    codeEmail();
                    break;
                  case 3:
                    check(errors.name);
                    break;
                  case 4:
                    check(errors.changepassword);
                    break;
                }
              }}
            >
              {step < 4 ? 'Next' : 'Sign up'}
              <div className={classes.step}>Step {step}/4</div>
            </button>
            {step !== 1 ? (
              <button
                className={classes.prevBtn}
                onClick={() => handleStep(-1)}
              >
                Back to
              </button>
            ) : (
              ''
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

const Schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(/^[A-Za-z 0-9]*$/, 'Please enter valid name.!')
    .min(2, 'Too Short !')
    .max(50, 'Too Long !')
    .required('Please enter name.!'),
  password: Yup.string().required('This field is required.!'),
  changepassword: Yup.string()
    .required('This field is required.!')
    .when('password', {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref('password')],
        'Both password need to be the same',
      ),
    }),
});

export default SignUpStepper;
