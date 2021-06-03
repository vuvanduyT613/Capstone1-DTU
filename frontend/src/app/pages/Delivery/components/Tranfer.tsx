import React /* useEffect, useState */ from 'react';
import styled from 'styled-components/macro';
import Header from './Header';
import ListItem from './List';
import { Pagination } from 'app/components/Pagination';
import { useSelector } from 'react-redux';
import { rootState } from 'store/reducers';
import _get from 'lodash/get';
interface Tranfer {}

const ListTranfer = (props: Tranfer) => {
  const { data } = useSelector((state: rootState) => state.userReducer.getAllUser);
  const fucPagination = value => {
    console.log(value);
  };
  return (
    <Wrapper>
      <Header />
      <WrapperList>
        {Object.keys(data).length > 0 ? (
          //@ts-ignore
          data.results.map(value => <ListItem data={value} isStatus={value.status} />)
        ) : (
          <></>
        )}
      </WrapperList>
      <Pagination current={1} total={2} fucPagination={fucPagination} pageSize={2} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 70%;
  height: 900px;
  background: #fdfdfd;
  margin-left: 19%;
  margin-top: 7%;
  border-radius: 4px;
`;
const WrapperList = styled.div`
  width: 100%;
  padding: 0px 30px;
`;
export default ListTranfer;
