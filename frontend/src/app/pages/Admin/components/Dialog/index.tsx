/**
 *
 * Dialog
 *
 */
import * as React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import useStyles from './styles';
import { Formik, Form } from 'formik';

interface Props {}

export function FormDialog(props: Props) {
  const classes = useStyles();

  const submit = async values => {};

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        name: '',
        email: '',
        password: '',
        role: '',
        isEmailVerified: '',
        avatar: '',
      }}
      onSubmit={submit}
    >
      {({
        errors,
        touched,
        setFieldValue,
        setFieldTouched,
        handleChange,
        values,
        handleSubmit,
      }) => (
        <Form className={classes.formWrapper}>
          <Grid item={true} xs={6}>
            <Grid item={true} className={classes.grid1} xs={12}>
              <TextField
                //defaultValue={values.name : ''}
                name="name"
                id="filled-basic"
                label="Name (*)"
                variant="filled"
                helperText={errors.name}
                value={values.name}
                error={Boolean(errors.name)}
                className={classes.filled1}
                onChange={handleChange}
              />
            </Grid>

            <Grid item={true} className={classes.grid1} xs={12}>
              <TextField
                //defaultValue={values.name : ''}
                name="email"
                id="filled-basic"
                label="Email (*)"
                variant="filled"
                helperText={errors.name}
                value={values.name}
                error={Boolean(errors.name)}
                className={classes.filled1}
                onChange={handleChange}
              />
            </Grid>

            <Grid item={true} className={classes.grid1} xs={12}>
              <TextField
                //defaultValue={values.name : ''}
                name="password"
                id="filled-basic"
                label="Password"
                variant="filled"
                helperText={errors.name}
                value={values.name}
                error={Boolean(errors.name)}
                className={classes.filled1}
                onChange={handleChange}
              />
            </Grid>

            <Grid item={true} className={classes.grid1} xs={12}>
              <TextField
                //defaultValue={values.name : ''}
                name="role"
                id="filled-basic"
                label="Role"
                variant="filled"
                helperText={errors.name}
                value={values.name}
                error={Boolean(errors.name)}
                className={classes.filled1}
                onChange={handleChange}
              />
            </Grid>

            <Grid item={true} className={classes.grid1} xs={12}>
              <TextField
                //defaultValue={values.name : ''}
                name="isEmailVerified"
                id="filled-basic"
                label="Email Verified (*)"
                variant="filled"
                helperText={errors.name}
                value={values.name}
                error={Boolean(errors.name)}
                className={classes.filled1}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid item={true} xs={6}>
            <Grid className={classes.dropzoneArea}>
              <DropzoneArea />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
