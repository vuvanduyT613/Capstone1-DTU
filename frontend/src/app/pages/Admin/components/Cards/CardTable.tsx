import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from 'store/reducers';
import Pagination from '@material-ui/lab/Pagination';
import Cookies from 'js-cookie';
// components

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {
  Grid,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
} from '@material-ui/core';

export default function CardTable({ color }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector(
    (state: rootState) => state.userReducer.getAllUser,
  );
  useEffect(() => {
    dispatch({
      type: 'GET_ALL_USER_API',
      payload: {
        token: Cookies.get('access_token'),
      },
    });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              }}
            >
              <Button onClick={() => {}} color="primary" autoFocus>
                Yes
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>

      <div
        className={
          'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
          (color === 'light' ? 'bg-white' : 'bg-lightBlue-900 text-white')
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  'font-semibold text-lg ' +
                  (color === 'light' ? 'text-blueGray-700' : 'text-white')
                }
              >
                Users Tables
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                >
                  Name
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                >
                  Email
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                >
                  Status
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                >
                  Users
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                >
                  Roles
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {
                //@ts-ignore
                data.results ? (
                  //@ts-ignore
                  data.results.map((value, index) => (
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <img
                          src={
                            require('../../assets/img/bootstrap.jpg').default
                          }
                          className="h-12 w-12 bg-white rounded-full border"
                          alt="..."
                        ></img>{' '}
                        <span
                          className={
                            'ml-3 font-bold ' +
                            +(color === 'light'
                              ? 'text-blueGray-600'
                              : 'text-white')
                          }
                        >
                          {value.name}
                        </span>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {value.email}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <i className="fas fa-circle text-orange-500 mr-2"></i>{' '}
                        pending
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex">
                          <img
                            src={
                              require('../../assets/img/team-1-800x800.jpg')
                                .default
                            }
                            alt="..."
                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                          ></img>
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">{value.role}</span>
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                        <Grid>
                          <IconButton color="primary">
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            color="secondary"
                            onClick={() => handleClickOpen()}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Grid>
                      </td>
                    </tr>
                  ))
                ) : (
                  <></>
                )
              }
            </tbody>
          </table>
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Pagination count={10} color="primary" />
          </div>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: 'light',
};

CardTable.propTypes = {
  color: PropTypes.oneOf(['light', 'dark']),
};
