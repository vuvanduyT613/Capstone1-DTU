import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

interface Props {}

export function Examination(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <h4>
        Phòng khám có thế mạnh về điều trị các bệnh lý cột sống, tủy sống, sử dụng thuốc kết hợp vật
        lý trị liệu:
      </h4>
      <ul>
        <li>Thoái hóa cột sống Vôi hóa cột sống </li>
        <li>Thoát vị đĩa đệm </li>
        <li>cột sống Phình đĩa đệm, lồi đĩa đệm </li>
        <li> Xẹp đĩa đệm</li>
      </ul>
      <h4>Một số chuyên khoa khác có thể khám và điều trị tại phòng khám</h4>
      <ul>
        <li>Cơ xương khớp </li>
        <li>Tim mạch</li>
        <li>Tai mũi họng</li>
        <li>Sản phụ khoa</li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 70%;
  padding-top: 50px;
`;
