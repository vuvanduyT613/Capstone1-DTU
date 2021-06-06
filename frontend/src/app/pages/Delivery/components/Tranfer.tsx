import React /* useEffect, useState */ from 'react';
import styled from 'styled-components/macro';
import Cookies from 'js-cookie';
import Header from './Header';
import ListItem from './List';
import { Pagination } from 'app/components/Pagination';
import { useSelector } from 'react-redux';
import { rootState } from 'store/reducers';
import { useDispatch } from 'react-redux';
import _get from 'lodash/get';
interface Tranfer {}

const ListTranfer = (props: Tranfer) => {
  const { data } = useSelector((state: rootState) => state.userReducer.getAllUser);
  const dispatch = useDispatch();

  const fucPagination = value => {
    dispatch({
      type: 'GET_ALL_DELIVERY_API',
      payload: {
        token: Cookies.get('access_token'),
        page: value,
        limit: 9,
        userID: Cookies.get('user_id'),
      },
    });
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
      <Pagination
        current={1}
        total={
          Object.keys(data).length > 0
            ? //@ts-ignore
              data.totalResults
            : 12
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
