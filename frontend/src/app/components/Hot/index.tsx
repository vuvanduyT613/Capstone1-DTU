/**
 *
 * Hot
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export function Hot(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      <p>HOT</p>
    </Div>
  );
}

const Div = styled.div`
  width: 40px;
  height: 22px;
  background: #ff3232;

  p {
    justify-content: center;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;

    /* Background White */

    color: #fdfdfd;
  }
`;
