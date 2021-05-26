import React, { useRef, forwardRef } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Cookies from 'js-cookie';
import Images from 'app/asset/image/';
import useStyles from './styles';

export default function CardSettings(props) {
  const refToAvatar = useRef<HTMLInputElement>(null);
  const classes = useStyles();
  const { data } = props;

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

  const signUp = async values => {
    props.onSubmit(values);
  };
  return (
    <>
      <Formik
        initialValues={{
          id: data && data.id !== 'undefined' ? data.id : '',
          userName: data && data.userName !== 'undefined' ? data.userName : '',
          email: data && data.email !== 'undefined' ? data.email : '',
          fistName: data && data.fistName !== 'undefined' ? data.fistName : '',
          lastName: data && data.lastName !== 'undefined' ? data.lastName : '',
          role: props.slug === 'doctor' ? { value: 'doctor' } : { value: 'user' },
          dateOfBirth:
            data && data.dateOfBirth !== 'undefined' ? new Date(data.dateOfBirth) : new Date(),
          password: '',
          changepassword: '',
          country: data && data.country !== 'undefined' ? data.country : '',
          city: data && data.city !== 'undefined' ? data.city : '',
          address: data && data.address !== 'undefined' ? data.address : '',
          postalCode: data && data.postalCode !== 'undefined' ? data.postalCode : '',
          phone: data && data.phone !== 'undefined' ? data.phone : '',
          avatar: data && data.avatar !== 'undefined' ? data.avatar : '',
          avatarLocal: data && data.avatar !== 'undefined' ? data.avatar : '',
          token: Cookies.get('access_token'),
        }}
        validationSchema={Schema}
        onSubmit={signUp}
      >
        {({ handleChange, values, setFieldValue, errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">
                    {' '}
                    {` ${data ? `UPDATE` : `ADD`} ${props.slug.toUpperCase()}`}{' '}
                  </h6>
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
                            const fileLocal = URL.createObjectURL(file);
                            setFieldValue('avatar', file);
                            setFieldValue('avatarLocal', fileLocal);
                          }}
                          ref={refToAvatar}
                        />
                        {
                          //@ts-ignore
                          values.avatar ? (
                            <>
                              <img src={values.avatarLocal} className={classes.avatar} />
                              <div onClick={handleChooseAvatar} className={classes.changeImage}>
                                Change image
                              </div>
                            </>
                          ) : (
                            <div className={classes.areaUploadAvatar} onClick={handleChooseAvatar}>
                              <img src={Images.iconAdd.default} style={{ margin: 'auto' }} />
                            </div>
                          )
                        }
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
                          name="userName"
                          value={values.userName}
                          onChange={handleChange}
                          placeholder="Enter user name"
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <p className={classes.err}>{Boolean(errors.userName) && errors.userName}</p>
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
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="Enter email your "
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <p className={classes.err}>{Boolean(errors.email) && errors.email}</p>
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
                          name="fistName"
                          type="text"
                          value={values.fistName}
                          onChange={handleChange}
                          placeholder="Enter fist name your "
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Lucky"
                        />
                        <p className={classes.err}>{Boolean(errors.fistName) && errors.fistName}</p>
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
                          name="lastName"
                          type="text"
                          value={values.lastName}
                          onChange={handleChange}
                          placeholder="Enter last name your "
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Jesse"
                        />
                        <p className={classes.err}>{Boolean(errors.lastName) && errors.lastName}</p>
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
                          name="password"
                          type="password"
                          value={values.password}
                          onChange={handleChange}
                          placeholder="Enter password your "
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Lucky"
                        />
                        <p className={classes.err}>{Boolean(errors.password) && errors.password}</p>
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
                          name="changepassword"
                          type="password"
                          value={values.changepassword}
                          onChange={handleChange}
                          placeholder="Enter confirm password your "
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <p className={classes.err}>
                          {Boolean(errors.changepassword) && errors.changepassword}
                        </p>
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
                      <p className={classes.err}>
                        {Boolean(errors.dateOfBirth) && errors.dateOfBirth}
                      </p>
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
                          name="phone"
                          type="text"
                          value={values.phone}
                          onChange={handleChange}
                          placeholder="Enter phone your "
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <p className={classes.err}>{Boolean(errors.phone) && errors.phone}</p>
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
                          name="address"
                          type="text"
                          value={values.address}
                          onChange={handleChange}
                          placeholder="Enter address your "
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        />
                        <p className={classes.err}>{Boolean(errors.address) && errors.address}</p>
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
                          name="city"
                          type="text"
                          value={values.city}
                          onChange={handleChange}
                          placeholder="Enter city your "
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <p className={classes.err}>{Boolean(errors.city) && errors.city}</p>
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
                          name="country"
                          type="text"
                          value={values.country}
                          onChange={handleChange}
                          placeholder="Enter country your "
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="United States"
                        />
                        <p className={classes.err}>{Boolean(errors.country) && errors.country}</p>
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
                          name="postalCode"
                          type="text"
                          value={values.postalCode}
                          onChange={handleChange}
                          placeholder="Enter postal code your "
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Postal Code"
                        />
                        <p className={classes.err}>
                          {Boolean(errors.postalCode) && errors.postalCode}
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
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
                  type="submit"
                >
                  {data ? `UPDATE` : `CREATE ${props.slug.toUpperCase()}`}{' '}
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

const Schema = Yup.object().shape({
  userName: Yup.string()
    .trim()
    .matches(/^[A-Za-z 0-9]*$/, 'Please enter valid user name.!')
    .min(5, 'User name too Short !')
    .max(13, 'User name Too Long !')
    .required('Please enter user name !'),
  email: Yup.string()
    .trim()
    .min(10, ' Email too Short !')
    .max(25, 'Email too Long !')
    .required('Please enter phone !'),
  fistName: Yup.string()
    .matches(/^[A-Za-z 0-9]*$/, 'Please enter valid fist name !')
    .min(0, 'Fist name too Short !')
    .max(15, 'Fist name too Long !')
    .required('Please enter fist name !'),
  lastName: Yup.string()
    .matches(/^[A-Za-z 0-9]*$/, 'Please enter valid last name.!')
    .min(0, ' Last name too Short ')
    .max(10, 'Last name too Long !')
    .required('Please enter last name.!'),
  dateOfBirth: Yup.string()
    .min(0, 'Date of birth too Short !')
    .max(100, 'Date of birth too Long !')
    .required('Please enter day of birth.!'),
  country: Yup.string()
    .matches(/^[A-Za-z 0-9]*$/, 'Please enter valid  country.!')
    .min(0, 'Country too Short !')
    .max(50, 'Country too Long !')
    .required('Please enter country !'),
  city: Yup.string().min(0, 'Too Short !').max(50, 'Too Long !').required('Please enter city.!'),
  address: Yup.string()
    .min(0, 'Address too Short !')
    .max(10, 'Address too Long !')
    .required('Please enter address !'),
  postalCode: Yup.string()
    .min(0, 'Postal code too Short !')
    .max(10, 'Postal code too Long !')
    .required('Please enter postal code !'),
  phone: Yup.string()
    .trim()
    .min(0, 'Phone too Short !')
    .max(13, 'Phone too Long !')
    .required('Please enter phone !'),
  avatar: Yup.string()
    .trim()
    .min(0, 'Avatar too Short !')
    .max(250, 'Avatar too Long !')
    .required('Please enter avatar !'),
  password: Yup.string().min(8),
  changepassword: Yup.string()
    .min(8)
    .when('password', {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], 'Both password need to be the same'),
    }),
});
