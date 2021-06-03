import React, { useRef, forwardRef } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Cookies from 'js-cookie';
import Select from 'react-select';
import Data from 'utils/static/data';
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

  const CustomInputDatePickerEnd = forwardRef((props: any, ref) => {
    return (
      <div>
        <input
          style={{
            border: '0px',
            height: '44px',
            width: '100% ',
            padding: '0.75rem',
            marginLeft: '14px',
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
          nameClinic: data && data.nameClinic !== 'undefined' ? data.nameClinic : '',
          country: data && data.country !== 'undefined' ? data.country : '',
          city: data && data.city !== 'undefined' ? data.city : '',
          address: data && data.address !== 'undefined' ? data.address : '',
          price: data && data.price !== 'undefined' ? data.price : '',
          image: data && data.image !== 'undefined' ? data.image : '',
          imageLocal: data && data.image !== 'undefined' ? data.image : '',
          timeWorkStart:
            data && data.timeWorkStart !== 'undefined' ? new Date(data.timeWorkStart) : new Date(),
          timeWorkEnd:
            data && data.timeWorkEnd !== 'undefined' ? new Date(data.timeWorkEnd) : new Date(),
          overview: data && data.overview !== 'undefined' ? data.overview : '',
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
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">Image</h6>
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
                            setFieldValue('image', file);
                            setFieldValue('imageLocal', fileLocal);
                          }}
                          ref={refToAvatar}
                        />
                        {
                          //@ts-ignore
                          values.image ? (
                            <>
                              <img src={values.imageLocal} className={classes.avatar2} />
                              <div onClick={handleChooseAvatar} className={classes.changeImage2}>
                                Change image
                              </div>
                            </>
                          ) : (
                            <div className={classes.areaUploadAvatar2} onClick={handleChooseAvatar}>
                              <img src={Images.iconAdd.default} style={{ margin: 'auto' }} />
                            </div>
                          )
                        }
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Clinic ID (*)
                        </label>
                        <input
                          name="id"
                          type="text"
                          disabled
                          value={values.id}
                          onChange={handleChange}
                          placeholder="ID generator auto"
                          style={{ backgroundColor: '#FEC' }}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <p className={classes.err}>{Boolean(errors.id) && errors.id}</p>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Clinice Name (*)
                        </label>
                        <input
                          name="nameClinic"
                          type="text"
                          value={values.nameClinic}
                          onChange={handleChange}
                          placeholder="Enter clinic your"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Lucky"
                        />
                        <p className={classes.err}>
                          {Boolean(errors.nameClinic) && errors.nameClinic}
                        </p>
                      </div>
                    </div>

                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          PRICE (*)
                        </label>
                        <input
                          name="price"
                          type="text"
                          value={values.price}
                          onChange={handleChange}
                          placeholder="Enter price your "
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Lucky"
                        />
                        <p className={classes.err}>{Boolean(errors.price) && errors.price}</p>
                      </div>
                    </div>

                    <div className="w-full flex lg:w-6/12 px-4">
                      <div className="relative w-full lg:w-6/12 mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Time start(*)
                        </label>
                        <DatePicker
                          wrapperClassName={classes.wrapper}
                          selected={values.timeWorkStart}
                          onChange={date => {
                            setFieldValue('timeWorkStart', date);
                          }}
                          isClearable={true}
                          customInput={<CustomInputDatePicker />}
                          showTimeSelect
                          showTimeSelectOnly
                          dateFormat="HH:mm"
                          timeIntervals={30}
                        />
                      </div>
                      <div className="relative w-full lg:w-6/12 mb-3">
                        <label
                          style={{ marginLeft: '14px' }}
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Time end(*)
                        </label>
                        <DatePicker
                          wrapperClassName={classes.wrapper}
                          selected={values.timeWorkEnd}
                          onChange={date => {
                            setFieldValue('timeWorkEnd', date);
                          }}
                          isClearable={true}
                          customInput={<CustomInputDatePickerEnd />}
                          showTimeSelect
                          showTimeSelectOnly
                          dateFormat="HH:mm"
                          timeIntervals={30}
                        />
                      </div>

                      <p className={classes.err}>{/*Boolean(errors.time) && errors.time*/}</p>
                    </div>

                    <div className="w-full lg:w-6/12 px-4">
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
                    <div className="w-full lg:w-3/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          City
                        </label>
                        <Select
                          value={values.city}
                          onChange={e => setFieldValue('city', e.value)}
                          placeholder={values.city === '' ? 'Choose your status' : values.city}
                          options={Data}
                          styles={CustomSelect}
                        />
                        <p className={classes.err}>{Boolean(errors.city) && errors.city}</p>
                      </div>
                    </div>
                    <div className="w-full lg:w-3/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Country
                        </label>
                        <Select
                          value={values.country}
                          onChange={e => setFieldValue('country', e.value)}
                          placeholder={
                            values.country === '' ? 'Choose your status' : values.country
                          }
                          options={[{ value: 'Viet Nam', label: 'Viet Nam' }]}
                          styles={CustomSelect}
                        />
                        <p className={classes.err}>{Boolean(errors.country) && errors.country}</p>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        list doctor
                      </label>
                      <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                          <tr>
                            <th className="px-6 text-left align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                              ID doctor
                            </th>
                            <th className="px-6 text-left align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                              avatar
                            </th>
                          </tr>
                          <tr>
                            {JSON.parse(Cookies.get('doctor_clinic')).map((value, key) => (
                              <>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  <div className="flex items-center">
                                    <span className="mr-2">{` ${12}`}</span>
                                  </div>
                                </td>
                              </>
                            ))}
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Over View (*)
                        </label>
                        <textarea
                          name="overview"
                          value={values.overview}
                          onChange={handleChange}
                          placeholder="Enter fist name your "
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Lucky"
                        />
                        <p className={classes.err}>{Boolean(errors.overview) && errors.overview}</p>
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

const Schema = Yup.object().shape({});
