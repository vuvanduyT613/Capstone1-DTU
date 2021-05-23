import React, { useRef, forwardRef } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Images from 'app/asset/image/';
import useStyles from './styles';

export default function CardSettings(props) {
  const refToAvatar = useRef<HTMLInputElement>(null);

  const classes = useStyles();

  const handleChooseAvatar = () => {
    if (refToAvatar.current !== null) {
      refToAvatar.current.click();
    }
  };
  const CustomInputDatePicker = forwardRef((props: any, ref) => {
    return (
      <div>
        <input
          style={{
            border: '0px',
            height: '44px',
            width: '100% ',
            padding: '0.75rem',
            outline: 'none',
            color: 'rgba(71, 85, 105,1)',
            borderRadius: '0.25rem',
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            boxShadow: ' 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            '&:hover': {
              outline: 20,
              boreder: '1px solid #000',
            },
          }}
          {...props}
          ref={ref}
        />
      </div>
    );
  });

  const signUp = values => {
    /* dispatch({
      type: 'UPDATE_FIELD_SIGN_UP_API',
      payload: values,
    });
    */
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
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
          <Form>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">ADD </h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    AVATAR
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
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
                            <img
                              src={URL.createObjectURL(values.avatar)}
                              className={classes.avatar}
                            />
                            <div onClick={handleChooseAvatar} className={classes.changeImage}>
                              Change image
                            </div>
                          </>
                        ) : (
                          <div className={classes.areaUploadAvatar} onClick={handleChooseAvatar}>
                            <img src={Images.iconAdd.default} style={{ margin: 'auto' }} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />

                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    User Information
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Username (*)
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="lucky.jesse"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email address (*)
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="jesse@example.com"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          First Name (*)
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Lucky"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Last Name (*)
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Jesse"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Lucky"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Jesse"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative  w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Date Of Birth (*)
                        </label>
                        <DatePicker
                          wrapperClassName={classes.wrapper}
                          selected={values.dateOfBirth}
                          onChange={date => {
                            setFieldValue('dateOfBirth', date);
                          }}
                          isClearable={true}
                          customInput={<CustomInputDatePicker />}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Phone Number (*)
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Jesse"
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Contact Information
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          City
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="New York"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="United States"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Postal Code
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Postal Code"
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    About Me
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          About me
                        </label>
                        <textarea
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source."
                          //@ts-ignore
                          rows="4"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <div className=" justify-center  flex w-full lg:w-12/12 px-4">
                      <button
                        className="bg-white max-w-200-px h-12 mr-4 active:bg-lightBlue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-mx-auto mb-1 ease-linear transition-all duration-150"
                        style={{
                          width: '100%',
                          border: '1px solid  rgba(14, 165, 233) ',
                          color: 'rgba(14, 165, 233)',
                        }}
                        type="button"
                      >
                        CREATE
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

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
