/**
 *
 * Loading
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export function Loading(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Loaded {...props}>
      <span className="loading" />
    </Loaded>
  );
}

const Loaded = styled.div`
  position: relative;
  height: 40px;
  text-align: center;

  .loading {
    position: absolute;
    left: calc(50% - 15px);
    top: calc(50% - 15px);
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 2px solid #dfdfdf;
    border-radius: 50%;
    border-top-color: #4116ff;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }
`;
