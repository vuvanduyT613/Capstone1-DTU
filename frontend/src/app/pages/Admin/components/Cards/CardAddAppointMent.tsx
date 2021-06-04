import React, { useRef, forwardRef } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Cookies from 'js-cookie';
import Select from 'react-select';
import useStyles from './styles';

export default function CardSettings(props) {
  const classes = useStyles();
  const { data } = props;

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

  const CustomSelect = {
    container: base => ({
      ...base,
      borderRadius: '5px',
      height: '44px',
    }),
    control: provided => ({
      ...provided,
      height: '44px',
      padding: 10,
      marginLeft: 0,
      border: '0px solid black',
      fontSize: '0.875rem',
      outline: 'none',
      textALign: 'center',
      color: 'rgb(71, 85, 105)',
      borderRadius: '0.25rem',
      lineHeight: '1.25rem',
      boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px',
    }),
    singleValue: base => ({
      ...base,
    }),
    valueContainer: base => ({
      ...base,
      color: 'white',
      marginTop: '-8px',
      marginLeft: '-8px',
      width: '100%',
    }),
    option: base => ({
      ...base,
      height: '100%',
    }),
  };

  const signUp = async values => {
    props.onSubmit(values);
  };

  const filterPassedTime = time => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <>
      <Formik
        initialValues={{
          id: data && data.id !== 'undefined' ? data.id : '',
          doctorID: data && data.doctorID !== 'undefined' ? data.doctorID : '',
          userID: data && data.userID !== 'undefined' ? data.userID : '',
          time: data && data.time !== 'undefined' ? new Date(data.time) : new Date(),
          status: data && data.status !== 'undefined' ? data.status : '',
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
                  <br></br>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          User ID (*)
                        </label>
                        <input
                          name="userID"
                          type="text"
                          value={values.userID}
                          onChange={handleChange}
                          placeholder="Enter user your "
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <p className={classes.err}>{Boolean(errors.userID) && errors.userID}</p>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Doctor ID (*)
                        </label>
                        <input
                          name="doctorID"
                          type="text"
                          value={values.doctorID}
                          onChange={handleChange}
                          placeholder="Enter fist name your "
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Lucky"
                        />
                        <p className={classes.err}>{Boolean(errors.doctorID) && errors.doctorID}</p>
                      </div>
                    </div>

                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative  w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Time (*)
                        </label>
                        <DatePicker
                          wrapperClassName={classes.wrapper}
                          selected={values.time}
                          onChange={date => {
                            setFieldValue('time', date);
                          }}
                          isClearable={true}
                          customInput={<CustomInputDatePicker />}
                          showTimeSelect
                          filterTime={filterPassedTime}
                          dateFormat="MMMM d, yyyy h:mm"
                        />
                      </div>
                      <p className={classes.err}>{Boolean(errors.time) && errors.time}</p>
                    </div>

                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Status
                        </label>
                        <Select
                          value={values.status}
                          onChange={e => setFieldValue('status', e.value)}
                          placeholder={values.status === '' ? 'Choose your status' : values.status}
                          options={[
                            { value: 'Active', label: 'Active' },
                            { value: 'Inactive', label: 'Inactive' },
                          ]}
                          styles={CustomSelect}
                        />
                        <p className={classes.err}>{Boolean(errors.status) && errors.status}</p>
                      </div>
                    </div>

                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Status
                        </label>
                        <Select
                          value={values.status}
                          onChange={e => setFieldValue('status', e.value)}
                          placeholder={values.status === '' ? 'Choose your status' : values.status}
                          options={[
                            { value: 'Unpaid', label: 'Unpaid' },
                            { value: 'Failled', label: 'Failled' },
                            { value: 'Expired', label: 'Expired' },
                            { value: 'Paid', label: 'Paid' },
                            { value: 'Refunding', label: 'Refunding' },
                            { value: 'Refunded', label: 'Refunded' },
                          ]}
                          styles={CustomSelect}
                        />
                        <p className={classes.err}>{Boolean(errors.status) && errors.status}</p>
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
                  {data
                    ? `UPDATE ${props.slug.toUpperCase()}`
                    : `CREATE ${props.slug.toUpperCase()}`}{' '}
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
  doctorID: Yup.string()
    .trim()
    .min(5, 'User id too Short !')
    .max(25, 'User id too Long !')
    .required('Please enter id !'),
  userID: Yup.string()
    .trim()
    .min(5, 'User id too Short !')
    .max(25, 'User id too Long !')
    .required('Please enter id !'),

  time: Yup.string()
    .min(5, 'User time too Short !')
    .max(50, 'User time too Long !')
    .required('Please enter time !'),

  status: Yup.string()
    .min(0, 'User status too Short !')
    .max(25, 'User status Too Long !')
    .required('Please enter status !'),
});
