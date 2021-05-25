import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from 'store/reducers';
import { Formik, Form } from 'formik';
import { Container, Grid, TextField } from '@material-ui/core';

export default function CardAdd(props) {
  const [open, setOpen] = React.useState(false);
  const [formDialog, setFormDialog] = React.useState(false);

  const { data } = useSelector((state: rootState) => state.userReducer.getAllUser);

  const handleClose = () => {
    setOpen(false);
    setFormDialog(false);
  };

  const addIn = async values => {};

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        name: '',
        password: '',
      }}
      onSubmit={addIn}
    >
      {({ handleChange, values, errors, handleSubmit }) => (
        <Form>
          <div
            className={
              'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
              (props.color === 'light' ? 'bg-white' : 'bg-lightBlue-900 text-white')
            }
          >
            <h1>ADD</h1>
            <br></br>
            <div className="block w-full overflow-x-auto">
              <Container>
                <Grid item={true} xs={12}>
                  <TextField
                    //defaultValue={values.name : ''}
                    name="email"
                    id="filled-basic"
                    label="Email (*)"
                    variant="filled"
                    helperText={errors.name}
                    value={values.name}
                    error={Boolean(errors.name)}
                    //className={classes.filled1}
                    onChange={handleChange}
                  />
                </Grid>
              </Container>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

CardAdd.defaultProps = {
  color: 'light',
};
