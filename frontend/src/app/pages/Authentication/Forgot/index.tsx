import React, { useState, useEffect, useRef } from 'react';
import CustomInput from '../components/CustomInput';
import Images from '../../../asset/image';
import useStyles from './styles';
import { rootState } from 'store/reducers';
import { useDispatch, /*connect,*/ useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';

export interface loginFormInterface {
  handleTosignUp: Function;
}

const Forgot = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState(false);
  const [isOpen, setOpen] = useState(true);
  const classes = useStyles();

  const signUp = values => {
    dispatch({
      type: 'FORGOT_SIGN_IN',
      payload: values,
    });
  };

  const onChange = value => {
    value && setOpen(false);
  };

  const recaptchaRef = React.createRef();
  return (
    <>
      {location === false ? (
        <Formik
          initialValues={{
            email: ' ',
          }}
          validationSchema={Schema}
          onSubmit={signUp}
        >
          {({ handleChange, values, errors, handleSubmit }) => (
            <Form className={classes.wrapperForm}>
              <div className={classes.wrapperSignUp}>
                <CustomInput
                  defaultvalue={values.email}
                  name="email"
                  typeInput="email"
                  iconLeft={Images.icMail.default}
                  placeholder={'Email your email address'}
                  handlerChange={e => handleChange(e)}
                />
                <div className={classes.captCha}>
                  <ReCAPTCHA
                    sitekey="6LeJ_hMbAAAAAHHYjg0V4MoiqjDXnvOCTTL-OwP-"
                    onChange={onChange}
                    ref={recaptchaRef}
                  />
                </div>
                <button
                  disabled={isOpen}
                  className={isOpen ? classes.continueDisable : classes.continueBtn}
                  onClick={() => (errors ? toast.error(errors.email) : handleSubmit)}
                >
                  Send password rest email
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
  email: Yup.string().trim().max(50, 'Too Long !').required('Please enter email.!'),
});

export default Forgot;
