import React /* useEffect, useState */ from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from 'store/reducers';
import Cookies from 'js-cookie';
import styled from 'styled-components/macro';
import { debounce } from 'lodash';

const Header = props => {
  const dispatch = useDispatch();
  const { page, option, query } = useSelector((state: rootState) => state.authenReducer.pageOption);
  const search = value => {
    props.fucHeader(value);
    dispatch({
      type: 'GET_ALL_CLINIC_API',
      payload: {
        token: Cookies.get('access_token'),
        page: page,
        limit: 6,
        nameClinic: value,
        query: Cookies.get('condition_clinic'),
      },
    });
  };

  const Debounce = React.useCallback(
    debounce(nextValue => search(nextValue), 1000),
    [],
  );

  return (
    <>
      <WrapperHeader>
        <Title>
          <p>Look up the clinic table </p>
          <WrapperInput>
            <div style={{ display: 'flex', width: '100%' }}>
              <Input onChange={e => Debounce(e.target.value)} />
              <Icon>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9167 9.66668H10.2584L10.025 9.44168C10.9388 8.377 11.4046 6.99969 11.3246 5.59891C11.2445 4.19813 10.6249 2.88284 9.59574 1.92918C8.5666 0.975529 7.208 0.457688 5.80519 0.484381C4.40238 0.511075 3.06446 1.08023 2.07235 2.07235C1.08023 3.06446 0.511075 4.40238 0.484381 5.80519C0.457688 7.208 0.975529 8.5666 1.92918 9.59574C2.88284 10.6249 4.19813 11.2445 5.59891 11.3246C6.99969 11.4046 8.377 10.9388 9.44168 10.025L9.66668 10.2584V10.9167L13.8334 15.075L15.075 13.8334L10.9167 9.66668ZM5.91668 9.66668C5.175 9.66668 4.44998 9.44675 3.83329 9.03469C3.21661 8.62264 2.73596 8.03697 2.45214 7.35175C2.16831 6.66652 2.09404 5.91252 2.23874 5.18509C2.38343 4.45767 2.74059 3.78948 3.26503 3.26503C3.78948 2.74059 4.45767 2.38343 5.18509 2.23874C5.91252 2.09404 6.66652 2.16831 7.35175 2.45213C8.03697 2.73596 8.62264 3.21661 9.03469 3.83329C9.44675 4.44998 9.66668 5.175 9.66668 5.91668C9.66734 6.40933 9.57079 6.89726 9.38257 7.35252C9.19435 7.80779 8.91815 8.22145 8.5698 8.5698C8.22145 8.91815 7.80779 9.19435 7.35252 9.38257C6.89726 9.57079 6.40933 9.66734 5.91668 9.66668Z"
                    fill="#FDFDFD"
                  />
                </svg>
              </Icon>
            </div>
          </WrapperInput>
        </Title>
      </WrapperHeader>
    </>
  );
};

const WrapperHeader = styled.div`
  padding: 0px 68px 0px 68px;
`;

const Title = styled.div`
  display: block;
  width: 100%;
  p {
    width: 55%;

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;

    /* #00358E */

    color: #00358e;
  }
`;
const WrapperInput = styled.div`
  display: flex;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  text-indent: 8px;
  margin: auto 0px auto auto;
  background: #fdfdfd;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;
  border: 1px solid rgba(114, 122, 142, 0.3);
  box-sizing: border-box;
  border-radius: 4px;

  &:focus {
    border-radius: 4px;
    border: 1px solid #00358e;
    outline: 0px;
  }

  &:hover {
    border-radius: 4px;
    outline: 0px;
  }
`;

const Icon = styled.div`
  width: 26px;
  height: 26px;
  /* #315DF7 */
  background: #315df7;
  border-radius: 4px;
  margin: 7px 0px 0px -31px;
  svg {
    margin-left: 5px;
  }
`;

export default Header;
