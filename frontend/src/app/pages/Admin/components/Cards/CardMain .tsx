import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from 'store/reducers';
import Pagination from '@material-ui/lab/Pagination';
import Cookies from 'js-cookie';
import { FormDialog } from '../Dialog';
// components

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setOpen(false);
    setFormDialog(false);
  };

  return (
    <>
      <Dialog
        open={formDialog}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        aria-labelledby="max-width-dialog-title"
      >
        <DialogContentText
          id="alert-dialog-description"
          style={{
            textAlign: 'center',
            marginTop: '50px',
            fontWeight: 'bold',
          }}
        >
          <h1> {`UPDATE`}</h1>
        </DialogContentText>
        <DialogContent>
          <FormDialog></FormDialog>
        </DialogContent>
        <Button
          style={{
            height: '50px',
          }}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </Dialog>

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
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '10px',
        }}
      >
        <Button variant="contained">
          {' '}
          <AddIcon /> {props.button}
        </Button>
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
                      'px-6  text-left align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ' +
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
                            +(props.color === 'light'
                              ? 'text-blueGray-600'
                              : 'text-white')
                          }
                        >
                          {value.name}
                        </span>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        18
                      </td>

                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">Krong Buk, Dak Lak</span>
                        </div>
                      </td>

                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        0335209131
                      </td>

                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {value.email}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        <Grid>
                          <IconButton
                            color="primary"
                            onClick={() => {
                              setFormDialog(true);
                            }}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            color="secondary"
                            onClick={() => {
                              setOpen(true);
                            }}
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
        <Pagination count={10} variant="outlined" shape="rounded" />
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: 'light',
};
