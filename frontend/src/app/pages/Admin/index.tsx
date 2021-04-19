/**
 *
 * Admin
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/styles/tailwind.css';
import Adminlayout from './layouts/Admin';

interface Props {}

export function Admin(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      <Adminlayout />
    </Div>
  );
}

const Div = styled.div``;
