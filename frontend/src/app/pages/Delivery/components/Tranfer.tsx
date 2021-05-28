import React /* useEffect, useState */ from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import styled from 'styled-components/macro';
import Header from './Header';
import ListItem from './List';
import { Pagination } from 'app/components/Pagination';
import _get from 'lodash/get';
interface Tranfer {}

const ListTranfer = (props: Tranfer) => {
  const [textSearch, setTextSearch] = React.useState('');
  const fucPagination = value => {
    console.log(value);
  };
  return (
    <Wrapper>
      <Header />
      <WrapperList>
        <ListItem isStatus={true} />
        <br></br>
        <ListItem isStatus={false} />
      </WrapperList>
      <Pagination current={1} total={2} fucPagination={fucPagination} pageSize={2} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;
  height: 900px;
  background: #fdfdfd;
  margin-left: 16%;
  margin-top: -5%;
  border-radius: 4px;
`;
const WrapperList = styled.div`
  width: 100%;
  padding: 0px 30px;
`;
export default ListTranfer;
