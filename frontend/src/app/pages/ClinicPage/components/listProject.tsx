import React /* useEffect, useState */ from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import styled from 'styled-components/macro';
import Header from './Header';
import List from './List';
import { Pagination } from 'app/components/Pagination';
import _get from 'lodash/get';
interface customInputProps {}

const ListProduct = (props: customInputProps) => {
  const [textSearch, setTextSearch] = React.useState('');
  const fucPagination = value => {
    console.log(value);
  };
  return (
    <Wrapper>
      <Header />
      <List />
      <Pagination current={1} total={2} fucPagination={fucPagination} pageSize={2} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 55%;
  height: 900px;
  background: #fdfdfd;
  margin-left: 19%;
  margin-top: 7%;
  border-radius: 4px;
`;

export default ListProduct;
