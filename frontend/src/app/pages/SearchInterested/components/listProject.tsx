import React /* useEffect, useState */ from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import styled from 'styled-components/macro';
import Header from './Header';
import List from './List';
import Detail from './Detail';
import { Pagination } from 'app/components/Pagination';
import { useSelector } from 'react-redux';
import { rootState } from 'store/reducers';
import _get from 'lodash/get';
interface customInputProps {}

const ListProduct = (props: customInputProps) => {
  const { data } = useSelector((state: rootState) => state.userReducer.getAllUser);
  const [state, setState] = React.useState('');

  const fucPagination = value => {
    console.log(value);
  };

  const fucHeader = value => {
    setState(value);
  };
  return (
    <Wrapper>
      <Header fucHeader={fucHeader} />
      <WrapperClinic>
        <List
          price={343434}
          name={'dsadsadadds'}
          address={'dsadsadadds'}
          district={'dsadsadadds'}
          city={'dsadsadadds'}
          image={'https://i.pinimg.com/originals/c6/37/f0/c637f060e0e549b01baf1fd781a75cb0.png'}
          overview={'dsadsadadds'}
          timeWorkStart={'dsadsadadds'}
          timeWorkEnd={'dsadsadadds'}
        />
        <Detail />
        {/*
          //@ts-ignore
          Object.keys(data).length > 0 && Object.keys(data.results).length > 0 ? (
            //@ts-ignore
            data.results.map(value => (
              <List
                price={value.price}
                name={value.nameClinic}
                address={value.address}
                district={value.district}
                city={value.city}
                image={value.image}
                overview={value.overview}
                timeWorkStart={value.timeWorkStart}
                timeWorkEnd={value.timeWorkEnd}
              />
            ))
          ) : (
            <NotFound>
              <h3>Your search - {`${state}`} - did not match any documents.</h3>
            </NotFound>
          )
          */}
      </WrapperClinic>

      <WrapperPagination>
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
      </WrapperPagination>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 30%;
  background: #fdfdfd;
  margin-left: 19%;
  margin-top: -7%;
  border-radius: 4px;
`;

const WrapperClinic = styled.div`
  padding: 0px 28px 0px 28px;
  display: block;
  flex-wrap: wrap;
`;

const NotFound = styled.div`
  padding: 0px 36px 0px 36px;
  width: 100%;
  height: 100%;
`;

const WrapperPagination = styled.div`
  padding: 0px 36px 0px 36px;
`;
export default ListProduct;
