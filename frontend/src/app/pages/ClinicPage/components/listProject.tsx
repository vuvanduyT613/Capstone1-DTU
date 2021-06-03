import React /* useEffect, useState */ from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import styled from 'styled-components/macro';
import Header from './Header';
import List from './List';
import { Pagination } from 'app/components/Pagination';
import { useSelector } from 'react-redux';
import { rootState } from 'store/reducers';
import _get from 'lodash/get';
interface customInputProps {}

const ListProduct = (props: customInputProps) => {
  const { data } = useSelector((state: rootState) => state.userReducer.getAllUser);

  console.log(data);
  const fucPagination = value => {
    console.log(value);
  };
  return (
    <Wrapper>
      <Header />
      <WrapperClinic>
        {Object.keys(data).length > 0 ? (
          //@ts-ignore
          data.results.map(value => (
            <List
              price={value.price}
              name={value.nameClinic}
              address={value.address}
              district={value.district}
              city={value.city}
              image={value.image}
            />
          ))
        ) : (
          <></>
        )}
      </WrapperClinic>

      <Pagination
        current={1}
        total={
          Object.keys(data).length > 0
            ? //@ts-ignore
              data.totalResults
            : 6
        }
        fucPagination={fucPagination}
        pageSize={
          Object.keys(data).length > 0
            ? //@ts-ignore
              data.totalPages
            : 10
        }
      />
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

const WrapperClinic = styled.div`
  display: flex;
`;
export default ListProduct;
