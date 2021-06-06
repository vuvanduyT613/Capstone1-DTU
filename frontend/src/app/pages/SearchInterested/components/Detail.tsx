import React /* useEffect, useState */ from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from 'store/reducers';
import Cookies from 'js-cookie';
import styled from 'styled-components/macro';
import Banner from './Banner';

const Detail = props => {
  return (
    <>
      <Wrapper>
        <Banner />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  right: 10px;
  top: 85px;
  border-radius: 5px;
  background: #fff;
`;

export default Detail;
