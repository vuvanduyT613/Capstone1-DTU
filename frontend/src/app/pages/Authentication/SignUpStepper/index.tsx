import React, { useState, useRef } from 'react';
import CustomInput from '../components/CustomInput';
import Images from '../../../asset/image';
import ReactCodeInput from 'react-verification-code-input';
import useStyles from './styles';
import { rootState } from 'store/reducers';
import { Box } from '@material-ui/core';
import { useDispatch, /*connect,*/ useSelector } from 'react-redux';
//import { UPDATE_FIELD_SIGN_UP } from 'store/reducers/Authetication/actionTypes';
// import CustomInput from '../components/CustomInput'

// export interface loginFormInterface {
//   handleTosignUp: Function
// }
const SignUpStepper = () => {
  const { /*email, phoneNumber,*/ step } = useSelector(
    (state: rootState) => state.authenReducer.signUp,
  );

  const dispatch = useDispatch();
  const refToFrontCard = useRef<HTMLInputElement>(null);
  const refToBackCard = useRef<HTMLInputElement>(null);
  const refToAvatar = useRef<HTMLInputElement>(null);
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const classes = useStyles();
  const [dataSignUp, setDataSignUp] = useState({
    email: '',
    phoneNumber: '',
    avatar: '',
    backCard: '',
    frontCard: '',
  });
  const handleStep = moveStep => {
    if (moveStep < 0)
      step > 1 &&
        dispatch({
          type: 'UPDATE_FIELD_SIGN_UP',
          payload: {
            step: step + moveStep,
          },
        });
    else
      step < 5 &&
        dispatch({
          type: 'UPDATE_FIELD_SIGN_UP',
          payload: {
            step: step + moveStep,
          },
        });
  };
  const handleChangeFrontCard = e => {
    const fileList = e.target.files;
    if (fileList.length) {
      setDataSignUp({
        ...dataSignUp,
        ...{ frontCard: URL.createObjectURL(fileList[0]) },
      });
    }
  };
  const handleChangeBackCard = e => {
    const fileList = e.target.files;
    if (fileList.length) {
      setDataSignUp({
        ...dataSignUp,
        ...{ backCard: URL.createObjectURL(fileList[0]) },
      });
    }
  };
  const handleChangeAvatar = e => {
    const fileList = e.target.files;
    if (fileList.length) {
      setDataSignUp({
        ...dataSignUp,
        ...{ avatar: URL.createObjectURL(fileList[0]) },
      });
    }
  };
  const handleChooseFrontCard = () => {
    if (refToFrontCard.current !== null) {
      refToFrontCard.current.click();
    }
  };
  const handleChooseBackCard = () => {
    if (refToBackCard.current !== null) {
      refToBackCard.current.click();
    }
  };
  const handleChooseAvatar = () => {
    if (refToAvatar.current !== null) {
      refToAvatar.current.click();
    }
  };
  const handleDelFrontCard = e => {
    setDataSignUp({ ...dataSignUp, ...{ frontCard: '' } });
    if (refToFrontCard.current !== null) {
      refToFrontCard.current.value = '';
    }
    e.stopPropagation();
  };
  const handleDelBackCard = e => {
    setDataSignUp({ ...dataSignUp, ...{ backCard: '' } });
    if (refToBackCard.current !== null) {
      refToBackCard.current.value = '';
    }
    e.stopPropagation();
  };

  const handlerChangeNumber = e => {
    console.log(e.target.value);
  };

  return (
    <div className={classes.wrapperSignUp}>
      {step === 1 ? (
        <CustomInput
          typeInput="email"
          iconLeft={Images.icPhone.default}
          handlerChange={handlerChangeNumber}
        />
      ) : step === 2 ? (
        <>
          <ReactCodeInput
            className={classes.otpCode}
            type="number"
            fields={4}
          />
          <div className={classes.sentCode}>
            Resend code in <span className={classes.time}>03:28</span>
          </div>
        </>
      ) : step === 3 ? (
        <>
          <CustomInput typeInput="email" iconLeft={Images.icMail.default} />
          <CustomInput iconLeft={Images.icPerson.default} />
          <CustomInput iconLeft={Images.icRefCode.default} />
          <input
            onChange={handleChangeFrontCard}
            hidden
            type="file"
            accept="image/*"
            name="profilePicture"
            ref={refToFrontCard}
          />
          <input
            onChange={handleChangeBackCard}
            hidden
            type="file"
            accept="image/*"
            name="profilePicture"
            ref={refToBackCard}
          />
          <Box display="flex" justifyContent="center" marginTop={4}>
            <div
              className={classes.wrapperCard}
              onClick={handleChooseFrontCard}
            >
              {dataSignUp.frontCard ? (
                <div className={classes.wrapperImageCard}>
                  <img
                    alt={'img1'}
                    src={Images.icDel.default}
                    className={classes.icDel}
                    onClick={handleDelFrontCard}
                  />
                  <img
                    alt={'img1'}
                    src={dataSignUp.frontCard}
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
                  <div className={classes.textUploadCard}>ID card front</div>
                </div>
              )}
            </div>
            <div
              className={classes.wrapperCard}
              onClick={handleChooseBackCard}
              style={{ marginLeft: 30 }}
            >
              {dataSignUp.backCard ? (
                <div className={classes.wrapperImageCard}>
                  <img
                    alt={'img1'}
                    src={Images.icDel.default}
                    className={classes.icDel}
                    onClick={handleDelBackCard}
                  />
                  <img
                    alt={'img1'}
                    src={dataSignUp.backCard}
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
                  <div className={classes.textUploadCard}>ID card back</div>
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
            handleClickRightIcon={() => setShowPassConfirm(!showPassConfirm)}
          />
        </>
      ) : step === 5 ? (
        <>
          <input
            onChange={handleChangeAvatar}
            hidden
            type="file"
            accept="image/*"
            name="profilePicture"
            ref={refToAvatar}
          />
          {dataSignUp.avatar ? (
            <>
              <img
                alt={'img1'}
                src={dataSignUp.avatar}
                className={classes.avatar}
              />
              <div onClick={handleChooseAvatar} className={classes.changeImage}>
                Thay đổi ảnh
              </div>
            </>
          ) : (
            <div
              className={classes.areaUploadAvatar}
              onClick={handleChooseAvatar}
            >
              <img alt={'img1'} src={Images.iconAdd.default} />
            </div>
          )}
        </>
      ) : (
        <> </>
      )}
      <button className={classes.continueBtn} onClick={() => handleStep(1)}>
        {step < 5 ? 'Next' : 'Sign up'}
        <div className={classes.step}>Step {step}/5</div>
      </button>
      {step !== 1 ? (
        <button className={classes.prevBtn} onClick={() => handleStep(-1)}>
          Back to
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default SignUpStepper;
