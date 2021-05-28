import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from 'store/reducers';
import Cookies from 'js-cookie';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import {
  Grid,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
} from '@material-ui/core';

export default function CardTable(props) {
  const [open, setOpen] = React.useState(false);
  const [formDialog, setFormDialog] = React.useState(false);
  const [id, setId] = React.useState({ id: '', token: Cookies.get('access_token') });

  const { data } = useSelector((state: rootState) => state.userReducer.getAllUser);

  const handleClose = () => {
    setOpen(false);
    setFormDialog(false);
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
        <Link to={props.to}>
          <Button variant="contained" style={{ background: '#fff', outline: 0 }}>
            <AddIcon />
            {`  ${props.button}`}
          </Button>
        </Link>
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
                    props.whoew === true ? (
                      <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                          <span
                            className={
                              'ml-3 font-bold ' +
                              +(props.color === 'light' ? 'text-blueGray-600' : 'text-white')
                            }
                          >
                            {`${value.id}`}
                          </span>
                        </th>
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
                            <div
                              style={{
                                backgroundColor: '#e5faf3',
                                border: '1px solid #00ce7c',
                                color: '#00ce7c',
                                borderRadius: '4px',
                                display: 'inline-block',
                                fontSize: '12px',
                                minWidth: '95px',
                                padding: '1px 10px',
                                textAlign: 'center',
                              }}
                            >
                              ACTIVE
                            </div>
                          ) : (
                            <div
                              style={{
                                backgroundColor: '#ffe5e6',
                                border: '1px solid #fe0000',
                                color: '#fe0000',
                                borderRadius: '4px',
                                display: 'inline-block',
                                fontSize: '12px',
                                minWidth: '95px',
                                padding: '1px 10px',
                                textAlign: 'center',
                              }}
                            >
                              IN ACTIVE
                            </div>
                          )}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          <Grid style={{ textAlign: 'center' }}>
                            <Link
                              to={`${props.to}?id=${value.id}&userID=${value.userID}&doctorID=${value.doctorID}&time=${value.time}&status=${value.status}&level=${value.level}&price=${value.price}&detail=${value.detail}&specialize=${value.specialize}`}
                            >
                              <IconButton color="primary" style={{ outline: 0 }}>
                                <EditIcon />
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
                              <DeleteIcon />
                            </IconButton>
                          </Grid>
                        </td>
                      </tr>
                    ) : value?.role === 'doctor' || value?.role === 'user' ? (
                      <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                          <img
                            src={value.avatar}
                            className="h-12 w-12 bg-white rounded-full border"
                            alt="..."
                          ></img>{' '}
                          <span
                            className={
                              'ml-3 font-bold ' +
                              +(props.color === 'light' ? 'text-blueGray-600' : 'text-white')
                            }
                          >
                            {`${value.fistName} ${value.lastName}`}
                          </span>
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {value.dateOfBirth}
                        </td>

                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">{` ${
                              value.country ? value.country : 'Viet Nam'
                            }, ${value.city}, ${value.address}.`}</span>
                          </div>
                        </td>

                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {value.phone
                            ? `(+84) ${value.phone.substring(1, 13)}`
                            : '(+84) 335209131'}
                        </td>

                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {value.email}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          <Grid style={{ textAlign: 'center' }}>
                            <Link
                              to={`${props.to}?id=${value.id}&avatar=${value.avatar}&city=${value.city}&dateOfBirth=${value.dateOfBirth}&email=${value.email}&fistName=${value.fistName}&lastName=${value.lastName}&postalCode=${value.postalCode}&address=${value.address}&role=${value.role}&userName=${value.userName}&country=${value.country}&phone=${value.phone}&price=${value.price}&level=${value.level}&detail=${value.detail}&specialize=${value.specialize}`}
                            >
                              <IconButton color="primary" style={{ outline: 0 }}>
                                <EditIcon />
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
                              <DeleteIcon />
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
