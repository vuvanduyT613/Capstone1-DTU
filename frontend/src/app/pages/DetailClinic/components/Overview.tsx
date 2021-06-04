import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

export function Overview({ data }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <h4>GENERAL INTRODUCTION</h4>
      <p>{data.overview}</p>
      <p>
        Address: {data.address}, {data.city}
      </p>
      <p>
        Working time Customers can register with doctors at the Clinic {data.name} From Monday to
        Saturday weekly:
      </p>
      <p>
        Start: {new Date(data.timeWorkStart).getHours()}{' '}
        {new Date(data.timeWorkStart).getHours() < 12 ? 'AM' : 'PM'} End:{' '}
        {new Date(data.timeWorkEnd).getHours()}{' '}
        {new Date(data.timeWorkEnd).getHours() < 12 ? 'AM' : 'PM'}
      </p>
      <p>
        Method of payment for medical examination and treatment costs Direct payment or in cash
        Payment via ATM card
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
  padding-top: 50px;
`;
