import React /* useEffect, useState */ from 'react';
// import Images from '../../../../asset/image';
// import { useSelector } from 'react-redux';
import { /*Grid,*/ TextField, InputAdornment } from '@material-ui/core';
import useStyles from './styles';
//import { rootState } from 'store/reducers';
//import classes from '*.module.css';

interface customInputProps {
  lablel?: string;
  off?: boolean;
  defaultvalue?: string;
  typeInput?: string;
  iconLeft?: any;
  iconRight?: any;
  name?: string;
  handleClickRightIcon?: Function;
  handlerChange?: Function;
  placeholder?: string;
}

const CustomInput = (props: customInputProps) => {
  const {
    lablel = '',
    typeInput = 'text',
    iconLeft = undefined,
    iconRight = undefined,
    name = 'text',
    handleClickRightIcon = undefined,
    handlerChange = undefined,
    placeholder = '',
    defaultvalue = '',
    off = false,
  } = props;
  const classes = useStyles();
  return (
    <>
      <p
        style={{
          padding: '10px 20px 0px',
          fontFamily: ' SF Pro Display',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: '14px',
          lineHeight: '19px',
          color: '#0B0D31',
        }}
      >{`${lablel}`}</p>
      <TextField
        value={defaultvalue}
        name={name}
        classes={{ root: classes.inputCustom }}
        disabled={off}
        variant="outlined"
        InputProps={{
          startAdornment: iconLeft ? (
            <InputAdornment position="start">
              <img alt={'img1'} src={iconLeft} className={classes.lefticon} />
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
        onChange={e => handlerChange && handlerChange(e)}
        type={typeInput}
      />
    </>
  );
};
export default CustomInput;
