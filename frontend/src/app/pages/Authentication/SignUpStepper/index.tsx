import React, { useState, useEffect, useRef, forwardRef } from 'react';
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
import { Grid } from '@material-ui/core';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { ReactComponent as Calendar } from 'app/asset/image/ic-calendar.svg';
import { ReactComponent as Role } from 'app/asset/image/ic-role.svg';
import 'react-datepicker/dist/react-datepicker.css';
export interface loginFormInterface {
  handleTosignUp: Function;
}

const SignUpStepper = () => {
  const { /*email, phoneNumber,*/ step } = useSelector(
    (state: rootState) => state.authenReducer.signUp,
  );
  const { code, email } = useSelector((state: rootState) => state.authenReducer.email);
  const refToAvatar = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [codeEnter, setCodeEnter] = useState({ code: 0 });
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [location, setLocation] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (step === 0) setLocation(true);
  }, [step]);

  const CustomInputDatePicker = forwardRef((props: any, ref) => {
    return (
      <input
        style={{
          border: '0px',
          height: '50px',
          width: '396px',
          outline: 'none',
          fontSize: '15px',
          '&:active': {
            border: '0px',
          },
        }}
        {...props}
        ref={ref}
      />
    );
  });

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
      step < 6 &&
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
      toast.success(`Success step ${step}/5 !`);
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
      toast.success(`Success step ${step}/5 !`);
      handleStep(1);
    } else toast.error('Authentication code is incorrect.!');
  };

  const checkField = err => {
    err.fistName ||
    err.lastName ||
    err.dateOfBirth ||
    err.country ||
    err.city ||
    err.address ||
    err.postalCode ||
    err.phone
      ? toast.error('Please check field.!')
      : toast.success(`Success step ${step}/5 !`) && handleStep(1);
  };

  const checkAuth = err => {
    err.changepassword
      ? toast.error(err.changepassword)
      : toast.success(`Success step ${step}/5 !`) && handleStep(1);
  };

  const checkAvatar = (err, values) => {
    err.avatar
      ? toast.error(err.avatar)
      : toast.success(`Success step ${step}/5 !`) && signUp(values) && handleStep(1);
  };

  const handleChooseAvatar = () => {
    if (refToAvatar.current !== null) {
      refToAvatar.current.click();
    }
  };

  const signUp = values => {
    dispatch({
      type: 'UPDATE_FIELD_SIGN_UP_API',
      payload: values,
    });
  };

  return (
    <>
      {location === false ? (
        <Formik
          initialValues={{
            email: email,
            fistName: '',
            lastName: '',
            gender: '',
            role: { value: 'user', label: 'User' },
            dateOfBirth: new Date(),
            password: '',
            changepassword: '',
            country: '',
            city: '',
            address: '',
            postalCode: '',
            phone: '',
            avatar: '',
          }}
          validationSchema={Schema}
          onSubmit={signUp}
        >
          {({ handleChange, values, setFieldValue, errors }) => (
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
                  <>
                    <CustomInput
                      defaultvalue={values.email}
                      name="email"
                      typeInput="email"
                      iconLeft={Images.icMail.default}
                      placeholder={'Email your email address'}
                      handlerChange={e => handleChange(e)}
                    />
                    <div className={classes.addressIcon}>
                      <Role className={classes.address} />
                    </div>
                    <Select
                      value={values.role}
                      onChange={e => setFieldValue('role', e)}
                      options={[
                        { value: 'user', label: 'User' },
                        { value: 'doctor', label: 'Doctor' },
                      ]}
                      styles={{
                        container: base => ({
                          ...base,
                          backgroundColor: '#fff',
                          borderRadius: '5px',
                          marginTop: '18px',
                          height: '50px',
                        }),
                        control: provided => ({
                          ...provided,
                          height: '50px',
                          padding: 10,
                          marginLeft: 0,
                          border: '0px solid black',
                          fontSize: 16,
                          backgroundColor: 'white',
                          outline: 'none',
                          textALign: 'center',
                        }),
                        singleValue: base => ({
                          ...base,
                          padding: 47,
                          fontSize: '15px',
                          borderRadius: 5,
                          color: '#000',
                          background: '#fff',
                          display: 'flex',
                        }),
                        placeholder: base => ({
                          ...base,
                          padding: 47,
                          fontSize: '15px',
                          color: '#c8c8c8',
                        }),
                        option: base => ({
                          ...base,
                          height: '100%',
                        }),
                        loadingMessage: base => ({
                          ...base,
                          backgroundColor: '#000',
                          color: 'white',
                        }),
                      }}
                    />
                  </>
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
                    <Grid direction="row" container>
                      <CustomInput
                        defaultvalue={values.phone}
                        name="phone"
                        iconLeft={Images.icPhone.default}
                        handlerChange={e => handleChange(e)}
                        placeholder={'Phone Number'}
                      />
                      <Grid xs={6}>
                        <CustomInput
                          defaultvalue={values.fistName}
                          name="fistName"
                          iconLeft={Images.icPerson.default}
                          handlerChange={e => handleChange(e)}
                          placeholder={'Fist name'}
                        />
                      </Grid>
                      <Grid xs={1} />
                      <Grid xs={5}>
                        <CustomInput
                          defaultvalue={values.lastName}
                          name="lastName"
                          handlerChange={e => handleChange(e)}
                          placeholder={'Last Name'}
                        />
                      </Grid>
                    </Grid>
                    <Grid xs={12} className={classes.datePicker}>
                      <Calendar className={classes.date} />
                      <DatePicker
                        selected={values.dateOfBirth}
                        onChange={date => {
                          setFieldValue('dateOfBirth', date);
                        }}
                        isClearable={true}
                        placeholderText="Date Time"
                        customInput={<CustomInputDatePicker />}
                      />
                    </Grid>
                    <CustomInput
                      defaultvalue={values.country}
                      name="country"
                      iconLeft={Images.isCountry.default}
                      handlerChange={e => handleChange(e)}
                      placeholder={'Country'}
                    />
                    <CustomInput
                      defaultvalue={values.city}
                      name="city"
                      iconLeft={Images.isCity.default}
                      handlerChange={e => handleChange(e)}
                      placeholder={'City'}
                    />
                    <CustomInput
                      defaultvalue={values.address}
                      name="address"
                      iconLeft={Images.isAddress.default}
                      handlerChange={e => handleChange(e)}
                      placeholder={'address'}
                    />
                    <CustomInput
                      defaultvalue={values.postalCode}
                      name="postalCode"
                      iconLeft={Images.isPostcode.default}
                      handlerChange={e => handleChange(e)}
                      placeholder={'Postal Code'}
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
                      handlerChange={e => handleChange(e)}
                      handleClickRightIcon={() => setShowPassConfirm(!showPassConfirm)}
                    />
                  </>
                ) : step === 5 ? (
                  <>
                    <input
                      hidden
                      type="file"
                      accept="image/*"
                      name="avatar"
                      onChange={e => {
                        //@ts-ignore

                        const file = e.target.files[0];
                        setFieldValue('avatar', file);
                      }}
                      ref={refToAvatar}
                    />
                    {values.avatar ? (
                      <>
                        <img src={URL.createObjectURL(values.avatar)} className={classes.avatar} />
                        <div onClick={handleChooseAvatar} className={classes.changeImage}>
                          Change image
                        </div>
                      </>
                    ) : (
                      <div className={classes.areaUploadAvatar} onClick={handleChooseAvatar}>
                        <img src={Images.iconAdd.default} />
                      </div>
                    )}
                  </>
                ) : (
                  <> </>
                )}
                <button
                  className={classes.continueBtn}
                  onClick={() =>
                    step === 1
                      ? sendEmail(values.email)
                      : step === 2
                      ? codeEmail()
                      : step === 3
                      ? checkField(errors)
                      : step === 4
                      ? checkAuth(errors)
                      : step === 5
                      ? checkAvatar(errors, values)
                      : null
                  }
                >
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
            </Form>
          )}
        </Formik>
      ) : (
        window.location.reload()
      )}
    </>
  );
};

const Schema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .matches(/^[A-Za-z 0-9]*$/, 'Please enter valid name.!')
    .min(10, 'Too Short !')
    .max(13, 'Too Long !')
    .required('Please enter phone.!'),
  fistName: Yup.string()
    .matches(/^[A-Za-z 0-9]*$/, 'Please enter valid fist name.!')
    .min(0, 'Too Short !')
    .max(15, 'Too Long !')
    .required('Please enter fist name.!'),
  lastName: Yup.string()
    .matches(/^[A-Za-z 0-9]*$/, 'Please enter valid last name.!')
    .min(0, 'Too Short !')
    .max(10, 'Too Long !')
    .required('Please enter last name.!'),
  dateOfBirth: Yup.string()
    .min(0, 'Too Short !')
    .max(100, 'Too Long !')
    .required('Please enter phone.!'),
  country: Yup.string()
    .matches(/^[A-Za-z 0-9]*$/, 'Please enter valid last date of birth.!')
    .min(0, 'Too Short !')
    .max(50, 'Too Long !')
    .required('Please enter date of birth.!'),
  city: Yup.string().min(0, 'Too Short !').max(50, 'Too Long !').required('Please enter city.!'),
  address: Yup.string()
    .min(0, 'Too Short !')
    .max(10, 'Too Long !')
    .required('Please enter address.!'),
  postalCode: Yup.string()
    .min(0, 'Too Short !')
    .max(10, 'Too Long !')
    .required('Please enter postal code.!'),
  phone: Yup.string()
    .trim()
    .min(0, 'Too Short !')
    .max(10, 'Too Long !')
    .required('Please enter phone.!'),
  avatar: Yup.string()
    .trim()
    .min(0, 'Too Short !')
    .max(250, 'Too Long !')
    .required('Please enter avatar.!'),
  password: Yup.string().required('This field is required.!'),
  changepassword: Yup.string()
    .required('This field is required.!')
    .when('password', {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], 'Both password need to be the same'),
    }),
});

export default SignUpStepper;
