/**
 *
 * List
 *
 */
import * as React from 'react';
import { ItemDoctor } from './components/ItemDoctor';
import { Header } from './components/Header';
//import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
interface Props {}

export function List(props: Props) {
  return (
    <>
      <div>
        <Header />
        <WrapperList>
          <ItemDoctor />
          <ItemDoctor />
          <ItemDoctor />
          <ItemDoctor />
        </WrapperList>
      </div>
    </>
  );
}

const WrapperList = styled.div`
  width: 86%;
  background: #FDFDFD;
  border-radius: 4px,
  top: 20px;
  padding: 30px;
  display: flex;
  `;
