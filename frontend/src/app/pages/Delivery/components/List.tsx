import React /* useEffect, useState */ from 'react';
import styled from 'styled-components/macro';
import { Grid } from '@material-ui/core';
import Cookies from 'js-cookie';
import _get from 'lodash/get';
interface Tranfer {
  isStatus: Boolean;
  data: Object;
}

const List = (props: Tranfer) => {
  //@ts-ignore
  const { id, userID, time } = props.data;
  return (
    <WrapperList>
      {Object.keys(props.data).length > 0 ? (
        <>
          <WrapperInfo>
            <p>Phòng khám Đa khoa Quốc tế Exson</p>
            <p>{Cookies.get('user_name')}</p>
          </WrapperInfo>
          <WrapperTranfer>
            <p>MGD: {id}</p>
          </WrapperTranfer>
          <WrapperStatus>
            <Code>{userID}</Code>
            {props.isStatus ? (
              <Status>Đã thanh toán</Status>
            ) : (
              <OffStatus>
                Cancel: {new Date(time).getHours()} H - {new Date(time).getDate()} /{' '}
                {new Date(time).getMonth()} / {new Date(time).getFullYear()}
              </OffStatus>
            )}
          </WrapperStatus>
        </>
      ) : (
        <></>
      )}
    </WrapperList>
  );
};

const WrapperList = styled.div`
  width: 100%;
  height: 92px;
  margin-bottom: 20px;
  padding: 2px 50px;
  background: rgba(184, 204, 255, 0.16);
  border-radius: 4px;
  display: flex;
`;

const WrapperInfo = styled.div`
  width: 40%;
  height: 92px;

  p {
    font-family: Abyssinica SIL;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;

    /* Title-Body text */

    color: #333333;
  }
`;

const WrapperTranfer = styled.div`
  width: 40%;
  height: 92px;
  p {
    font-family: Abyssinica SIL;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;

    /* Title-Body text */

    color: #333333;
  }
`;

const WrapperStatus = styled.div`
  width: 20%;
  height: 92px;
`;

const Code = styled.p`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  justify-content: flex-end;
  text-align: end;
  display: flex;
  align-items: center;
  text-align: right;

  /* #00358E */

  color: #00358e;
`;
const Status = styled.p`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 150% */
  justify-content: flex-end;
  display: flex;
  align-items: center;
  text-align: right;

  /* #FE9C5E */

  color: #ff9832;
`;

const OffStatus = styled.p`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 150% */
  justify-content: flex-end;
  display: flex;
  text-align: right;

  /* #FF3232 */

  color: #ff3232;
`;
export default List;
