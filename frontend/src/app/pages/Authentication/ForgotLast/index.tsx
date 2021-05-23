import React, { useState, useEffect, useRef } from 'react';
import CustomInput from '../components/CustomInput';
import Images from '../../../asset/image';
import useStyles from './styles';
import { rootState } from 'store/reducers';
import { useDispatch, /*connect,*/ useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

export interface loginFormInterface {
  handleTosignUp: Function;
}

const ForgotLast = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);

  const classes = useStyles();

  const signUp = values => {
    dispatch({
      type: 'RESET_SIGN_IN',
      payload: values,
    });
  };

  return (
    <>
      {location === false ? (
        <Formik
          initialValues={{
            password: '',
            changepassword: '',
          }}
          validationSchema={Schema}
          onSubmit={signUp}
        >
          {({ handleChange, values, errors }) => (
            <Form className={classes.wrapperForm}>
              <div className={classes.wrapperSignUp}>
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
                <p
                  style={{
                    textAlign: 'justify',
                    fontSize: '15px',
                    color: '#011',
                    padding: 10,
                    margin: '18 10 0 10',
                  }}
                >
                  Make sure it's at least 15 characters OR at least 8 characters
                  including a number and a lowercase letter.
                </p>
                <button
                  className={classes.continueBtn}
                  onClick={() => {
                    errors && toast.error(errors.changepassword);
                    signUp(values);
                  }}
                >
                  Change Password
                </button>
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

export default ForgotLast;
