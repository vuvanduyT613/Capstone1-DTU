import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from 'store/reducers';
import Cookies from 'js-cookie';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from 'react-router-dom';
import {
  Grid,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
} from '@material-ui/core';
import Skeleton from 'react-loading-skeleton';
import Lazyload from 'react-lazyload';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ReactComponent as Edit } from '../../assets/img/ic_edit.svg';
import { ReactComponent as Cancel } from '../../assets/img/ic_cancel.svg';
import styled from 'styled-components/macro';
import { css } from 'styled-components';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
export default function CardTable(props) {
  const [open, setOpen] = React.useState(false);
  const [formDialog, setFormDialog] = React.useState(false);
  const [id, setId] = React.useState({ id: '', token: Cookies.get('access_token') });
  const [arrDelete, setArrDelete] = React.useState([]);

  const { data } = useSelector((state: rootState) => state.userReducer.getAllUser);

  const onChange = (e, value) => {
    if (e.target.checked === true) {
      //@ts-ignore
      setArrDelete([...arrDelete, value]);
    }
    if (e.target.checked === false) {
      //@ts-ignore
      setArrDelete(arrDelete.filter(item => item !== value));
    }
  };

  const handleClose = () => {
    setOpen(false);
    setFormDialog(false);
  };

  const Status = styled.div`
    background-color: #fff;
    border: 1px solid ${props => props.color};
    color: ${props => props.color};
    border-radius: 4px;
    display: inline-block;
    font-size: 12px;
    min-width: 95px;
    padding: 1px 10px;
    text-align: center;
  `;

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{
              width: '300px',
              height: '100px',
              marginTop: '70px',
              textAlign: 'center',
            }}
          >
            <h4> {`DO YOU WANT DELETE`}</h4>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ padding: '0px' }}>
          <Grid item={true} xs={12} style={{ display: 'flex' }}>
            <Grid
              item={true}
              xs={6}
              style={{
                textAlign: 'center',

                backgroundColor: 'rgb(230, 230, 230)',
              }}
            >
              <Button onClick={handleClose} color="secondary">
                No
              </Button>
            </Grid>
            <Grid
              item={true}
              xs={6}
              style={{
                textAlign: 'center',
                backgroundColor: 'rgb(230, 230, 230)',
                outline: 0,
                border: 0,
              }}
            >
              <Button
                onClick={() => {
                  handleClose();
                  props.fucDelete(id);
                }}
                color="primary"
                autoFocus
                style={{
                  textAlign: 'center',
                  backgroundColor: 'rgb(230, 230, 230)',
                  outline: 0,
                  border: 0,
                }}
              >
                Yes
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '10px',
        }}
      >
        {arrDelete.length > 0 ? (
          <Link to={props.to}>
            <Button
              variant="contained"
              style={{
                background: '#f44336',
                outline: 0,
                color: '#fff',
                transitionDelay: '0.2s',
              }}
            >
              <DeleteOutlineIcon style={{ marginRight: '10px' }} />
              {` DELETE ALL`}
            </Button>
          </Link>
        ) : (
          <Link to={props.to}>
            <Button variant="contained" style={{ background: '#fff', outline: 0 }}>
              <AddCircleOutlineIcon style={{ marginRight: '10px' }} />
              {`  ${props.button}`}
            </Button>
          </Link>
        )}
      </div>
      <div
        className={
          'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
          (props.color === 'light' ? 'bg-white' : 'bg-lightBlue-900 text-white')
        }
      >
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {props.column.map((value, key) => (
                  <th
                    className={
                      'px-6 ' +
                      (value === 'Action' ? 'text-center' : 'text-left') +
                      ' align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ' +
                      (props.color === 'light'
                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                    }
                  >
                    {value}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {
                //@ts-ignore
                data.results ? (
                  //@ts-ignore
                  data.results.map((value, index) =>
                    props.whoew === 1 ? (
                      <tr className={index % 2 == 0 ? '' : 'bg-blueGray-50 '}>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <Checkbox onChange={e => onChange(e, value.id)}></Checkbox>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          <span
                            className={
                              'ml-3 font-bold ' +
                              +(props.color === 'light' ? 'text-blueGray-600' : 'text-white')
                            }
                          >
                            {`${value.id}`}
                          </span>
                        </td>

                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {`${value.userID}`}
                        </td>

                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">{` ${value.doctorID}`}</span>
                          </div>
                        </td>

                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {` ${value.time}`}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {value.status === 'active' || value.status === 'Active' ? (
                            <Status color={'#00ce7c'}>ACTIVE</Status>
                          ) : (
                            <Status color={'#fe0000'}>IN ACTIVE</Status>
                          )}
                        </td>

                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {value.payment === 'Unpaid' ? (
                            <Status color={'#f0ad4e'}> UNPAID</Status>
                          ) : value.payment === 'Failled' ? (
                            <Status color={'#d9534f'}> FAILLED</Status>
                          ) : value.payment === 'Paid' ? (
                            <Status color={'#5cb85c'}> PAID</Status>
                          ) : value.payment === 'Refunding' ? (
                            <Status color={'#008edd'}> REFUNDING</Status>
                          ) : value.payment === 'Refunded' ? (
                            <Status color={'#008edd'}> REFUNDED</Status>
                          ) : (
                            <Status color={'#000'}> EXPIRED</Status>
                          )}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          <Grid style={{ textAlign: 'center' }}>
                            <Link
                              to={`${props.to}?id=${value.id}&payment=${value.payment}&userID=${value.userID}&doctorID=${value.doctorID}&time=${value.time}&status=${value.status}&level=${value.level}&price=${value.price}&detail=${value.detail}&specialize=${value.specialize}`}
                            >
                              <IconButton color="primary" style={{ outline: 0 }}>
                                <Edit />
                              </IconButton>
                            </Link>

                            <IconButton
                              color="secondary"
                              style={{ outline: 0 }}
                              onClick={() => {
                                setOpen(true);
                                //@ts-ignore
                                setId({ ...id, id: value.id });
                              }}
                            >
                              <Cancel />
                            </IconButton>
                          </Grid>
                        </td>
                      </tr>
                    ) : props.whoew === 2 ? (
                      <tr className={index % 2 == 0 ? '' : 'bg-blueGray-50 '}>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <Checkbox onChange={e => onChange(e, value.id)}></Checkbox>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                          <div
                            style={{
                              width: '300px',
                              height: '168px',
                              overflow: 'hidden',
                              objectFit: 'cover',
                              borderRadius: '10px',
                              background: 'rgba(2, 132, 121, 0.1)',
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <LazyLoadImage
                              src={value.image}
                              effect="blur"
                              width={'auto'}
                              height={'100%'}
                            ></LazyLoadImage>
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {`${value.address}, ${value.city}, ${value.country}`}
                        </td>

                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">{` ${value.price}`}</span>
                          </div>
                        </td>

                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {` ${value.postionMap}`}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div
                            style={{
                              border: '1px solid #00ce7c',
                              color: '#00ce7c',
                              borderRadius: '4px 0px 0px 4px',
                              display: 'inline-block',
                              fontSize: '12px',
                              padding: '10px 10px',
                              textAlign: 'center',
                            }}
                          >
                            {`${new Date(value.timeWorkStart).getHours()} ${
                              new Date(value.timeWorkStart).getHours() < 12 ? 'AM' : 'PM'
                            }`}
                          </div>

                          <div
                            style={{
                              border: '1px solid #fe0000',
                              color: '#fe0000',
                              borderRadius: '0px 4px 4px 0px',
                              display: 'inline-block',
                              fontSize: '12px',
                              padding: '10px 10px',
                              textAlign: 'center',
                              marginLeft: '2px',
                            }}
                          >
                            {`${new Date(value.timeWorkEnd).getHours()} ${
                              new Date(value.timeWorkEnd).getHours() < 12 ? 'AM' : 'PM'
                            } `}
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {` ${value.doctor && Object.keys(value.doctor).length}`}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          <Grid style={{ textAlign: 'center' }}>
                            <Link
                              onClick={() => Cookies.set('doctor_clinic', value.doctor)}
                              to={`${props.to}?id=${value.id}&nameClinic=${value.nameClinic}&address=${value.address}&city=${value.city}&country=${value.country}&overview=${value.overview}&timeWorkStart=${value.timeWorkStart}&timeWorkEnd=${value.timeWorkEnd}&price=${value.price}&image=${value.image}`}
                            >
                              <IconButton color="primary" style={{ outline: 0 }}>
                                <Edit />
                              </IconButton>
                            </Link>

                            <IconButton
                              color="secondary"
                              style={{ outline: 0 }}
                              onClick={() => {
                                setOpen(true);
                                //@ts-ignore
                                setId({ ...id, id: value.id });
                              }}
                            >
                              <Cancel />
                            </IconButton>
                          </Grid>
                        </td>
                      </tr>
                    ) : value?.role === 'doctor' || value?.role === 'user' ? (
                      <tr className={index % 2 == 0 ? '' : 'bg-blueGray-50 '}>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <Checkbox onChange={e => onChange(e, value.id)}></Checkbox>
                        </td>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                          <Lazyload once={true}>
                            <div
                              style={{ overflow: 'hidden' }}
                              className="h-12 w-12 bg-white rounded-full border"
                            >
                              <LazyLoadImage
                                src={value.avatar}
                                effect="blur"
                                alt={`profile`}
                                width={'100%'}
                                height={'100%'}
                              />
                            </div>
                          </Lazyload>

                          <span
                            className={
                              'ml-3 font-bold ' +
                              +(props.color === 'light' ? 'text-blueGray-600' : 'text-white')
                            }
                          >
                            {`${value.fistName || <Skeleton />} ${value.lastName || <Skeleton />}`}
                          </span>
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {value.dateOfBirth || <Skeleton />}
                        </td>

                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">{` ${
                              value.country ? value.country || <Skeleton /> : 'Viet Nam'
                            }, ${value.city || <Skeleton />}, ${
                              value.address || <Skeleton />
                            }.`}</span>
                          </div>
                        </td>

                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {value.phone
                            ? `(+84) ${value.phone.substring(1, 13)}` || <Skeleton />
                            : '(+84) 335209131'}
                        </td>

                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {value.email || <Skeleton />}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          <Grid style={{ textAlign: 'center' }}>
                            <Link
                              to={`${props.to}?id=${value.id}&avatar=${value.avatar}&city=${value.city}&dateOfBirth=${value.dateOfBirth}&email=${value.email}&fistName=${value.fistName}&lastName=${value.lastName}&postalCode=${value.postalCode}&address=${value.address}&role=${value.role}&userName=${value.userName}&country=${value.country}&phone=${value.phone}&price=${value.price}&level=${value.level}&detail=${value.detail}&specialize=${value.specialize}`}
                            >
                              <IconButton color="primary" style={{ outline: 0 }}>
                                <Edit />
                              </IconButton>
                            </Link>

                            <IconButton
                              color="secondary"
                              style={{ outline: 0 }}
                              onClick={() => {
                                setOpen(true);
                                //@ts-ignore
                                setId({ ...id, id: value.id, role: value.role });
                              }}
                            >
                              <Cancel />
                            </IconButton>
                          </Grid>
                        </td>
                      </tr>
                    ) : (
                      <></>
                    ),
                  )
                ) : (
                  <></>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '2px',
        }}
      >
        <Pagination
          onChange={(e, values) => {
            props.fucPage(values);
          }}
          //@ts-ignore
          count={data.totalPages}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: 'light',
};
