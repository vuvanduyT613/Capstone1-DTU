import React, { useState, useRef, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import Images from '../../../asset/image';
import ReactCodeInput from 'react-verification-code-input';
import useStyles from './styles';
import { rootState } from 'store/reducers';
import { Box } from '@material-ui/core';
import { useDispatch, /*connect,*/ useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import Countdown from 'react-countdown';
export interface loginFormInterface {
  handleTosignUp: Function;
}

const SignUpStepper = () => {
  const { /*email, phoneNumber,*/ step } = useSelector(
    (state: rootState) => state.authenReducer.signUp,
  );
  const { code } = useSelector((state: rootState) => state.authenReducer.email);
  const [codeEnter, setCodeEnter] = useState({ code: 0 });
  const dispatch = useDispatch();
  const refToFrontCard = useRef<HTMLInputElement>(null);
  const refToBackCard = useRef<HTMLInputElement>(null);
  const refToAvatar = useRef<HTMLInputElement>(null);
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
      step < 5 &&
        dispatch({
          type: 'UPDATE_FIELD_SIGN_UP',
          payload: {
            step: step + moveStep,
          },
        });
    }
  };

  const sendEmail = (step, email) => {
    if (email) {
      toast.success(`Success step ${step}/5.!`);
      handleStep(1);
      dispatch({
        type: 'UPDATE_FIELD_SIGN_UP_SEND_EMAIL',
        payload: {
          email: email,
        },
      });
    } else toast.error('Please enter gmail for authentication.!');
  };

  const codeEmail = step => {
    if (codeEnter.code === code) {
      toast.success(`Success step ${step}/5.!`);
      handleStep(1);
    } else toast.error('Authentication code is incorrect.!');
  };

  const signIn = () => {};

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        email: '',
        avatar: '',
        backCard: '',
        frontCard: '',
      }}
      onSubmit={signIn}
    >
      {({ handleChange, values, handleSubmit }) => (
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
                  typeInput="email"
                  iconLeft={Images.icMail.default}
                />
                <CustomInput iconLeft={Images.icPerson.default} />
                <CustomInput iconLeft={Images.icRefCode.default} />
                <input
                  onChange={e => handleChange(e)}
                  hidden
                  type="file"
                  accept="image/*"
                  name="profilePicture"
                  ref={refToFrontCard}
                />
                <input
                  onChange={e => handleChange(e)}
                  hidden
                  type="file"
                  accept="image/*"
                  name="profilePicture"
                  ref={refToBackCard}
                />
                <Box display="flex" justifyContent="center" marginTop={4}>
                  <div
                    className={classes.wrapperCard}
                    onClick={e => handleChange(e)}
                  >
                    {values.frontCard ? (
                      <div className={classes.wrapperImageCard}>
                        <img
                          alt={'img1'}
                          src={Images.icDel.default}
                          className={classes.icDel}
                          //onClick={handleDelFrontCard}
                        />
                        <img
                          alt={'img1'}
                          src={values.frontCard}
                          className={classes.imgCard}
                        />
                      </div>
                    ) : (
                      <div className={classes.cardEmpty}>
                        <img
                          alt={'img1'}
                          width="18px"
                          src={Images.icUpload.default}
                        />
                        <div className={classes.textUploadCard}>
                          ID card front
                        </div>
                      </div>
                    )}
                  </div>
                  <div
                    className={classes.wrapperCard}
                    //onClick={handleChooseBackCard}
                    style={{ marginLeft: 30 }}
                  >
                    {values.backCard ? (
                      <div className={classes.wrapperImageCard}>
                        <img
                          alt={'img1'}
                          src={Images.icDel.default}
                          className={classes.icDel}
                          //onClick={handleDelBackCard}
                        />
                        <img
                          alt={'img1'}
                          src={values.backCard}
                          className={classes.imgCard}
                        />
                      </div>
                    ) : (
                      <div className={classes.cardEmpty}>
                        <img
                          alt={'img1'}
                          width="18px"
                          src={Images.icUpload.default}
                        />
                        <div className={classes.textUploadCard}>
                          ID card back
                        </div>
                      </div>
                    )}
                  </div>
                </Box>
              </>
            ) : step === 4 ? (
              <>
                <CustomInput
                  typeInput={showPass ? 'text' : 'password'}
                  placeholder="Password"
                  iconLeft={Images.iconPass.default}
                  iconRight={Images.iconOpenPass.default}
                  handleClickRightIcon={() => setShowPass(!showPass)}
                />
                <CustomInput
                  typeInput={showPassConfirm ? 'text' : 'password'}
                  placeholder="Confirm password"
                  iconLeft={Images.iconPass.default}
                  iconRight={Images.iconOpenPass.default}
                  handleClickRightIcon={() =>
                    setShowPassConfirm(!showPassConfirm)
                  }
                />
              </>
            ) : step === 5 ? (
              <>
                <input
                  onChange={e => handleChange(e)}
                  hidden
                  type="file"
                  accept="image/*"
                  name="profilePicture"
                  ref={refToAvatar}
                />
                {values.avatar ? (
                  <>
                    <img
                      alt={'img1'}
                      src={values.avatar}
                      className={classes.avatar}
                    />
                    <div
                      //onClick={handleChooseAvatar}
                      className={classes.changeImage}
                    >
                      Thay đổi ảnh
                    </div>
                  </>
                ) : (
                  <div
                    className={classes.areaUploadAvatar}
                    //onClick={handleChooseAvatar}
                  >
                    <img alt={'img1'} src={Images.iconAdd.default} />
                  </div>
                )}
              </>
            ) : (
              <> </>
            )}
            <button
              className={classes.continueBtn}
              onClick={() => {
                step === 1 && sendEmail(step, values.email);
                step === 2 && codeEmail(step);
              }}
            >
              {step < 5 ? 'Next' : 'Sign up'}
              <div className={classes.step}>Step {step}/5</div>
            </button>
            {step !== 0 ? (
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

export default SignUpStepper;
