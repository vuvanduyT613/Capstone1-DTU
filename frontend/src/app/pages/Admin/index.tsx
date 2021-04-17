/**
 *
 * Admin
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Navbar } from './components/Navbar';

import { messages } from './messages';

interface Props {}

export function Admin(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      <Navbar />
    </Div>
  );
}

const Div = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100vw;
  height: 100vh;
`;
