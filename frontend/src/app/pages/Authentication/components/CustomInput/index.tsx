import React /* useEffect, useState */ from 'react';
// import Images from '../../../../asset/image';
// import { useSelector } from 'react-redux';
import { /*Grid,*/ TextField, InputAdornment } from '@material-ui/core';
import useStyles from './styles';
//import { rootState } from 'store/reducers';
//import classes from '*.module.css';

interface customInputProps {
  typeInput?: string;
  iconLeft?: any;
  iconRight?: any;
  handleClickRightIcon?: Function;
  placeholder?: string;
}

const CustomInput = (props: customInputProps) => {
  const {
    typeInput = 'text',
    iconLeft = undefined,
    iconRight = undefined,
    handleClickRightIcon = undefined,
    placeholder = '',
  } = props;
  const classes = useStyles();
  return (
    <TextField
      classes={{ root: classes.inputCustom }}
      variant="outlined"
      InputProps={{
        startAdornment: iconLeft ? (
          <InputAdornment position="start">
            <img alt={'img1'} src={iconLeft} />
          </InputAdornment>
        ) : undefined,
        endAdornment: iconRight ? (
          <InputAdornment position="end">
            <img
              alt={'img1'}
              className={classes.righticon}
              onClick={() => {
                handleClickRightIcon && handleClickRightIcon();
              }}
              src={iconRight}
            />
          </InputAdornment>
        ) : undefined,
      }}
      placeholder={placeholder}
      type={typeInput}
    />
  );
};
export default CustomInput;
