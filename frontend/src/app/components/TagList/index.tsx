/**
 *
 * TagList
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {
  list;
  isAbsolute;
}

export function TagList(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      <TagWrap>
        {
          //@ts-ignore
          list.map(item => (
            <Tag
              key={item.id}
              //@ts-ignore
              isHot={item.isHot}
              isNew={item.isNew}
              isOpen={item.isOpen}
            >
              {item.text}
            </Tag>
          ))
        }
      </TagWrap>
    </Div>
  );
}

const Div = styled.div``;

export const TagWrap = styled.div`
  display: flex;
  z-index: 9;

  position: absolute;
  top: 10px;
  left: 10px;
`;

export const Tag = styled.div`
  display: inline-block;
  text-transform: uppercase;
  padding: 4px;
  line-height: 1;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 700;

  &:not(:last-child) {
    margin-right: 5px;
  }

  ${(
    //@ts-ignore
    { isHot },
  ) =>
    isHot &&
    css`
      background: #ff3232;
      color: #fff;
    `}

  ${(
    //@ts-ignore
    { isNew },
  ) =>
    isNew &&
    css`
      background: #ffd932;
      color: #333;
    `}

  ${(
    //@ts-ignore
    { isOpen },
  ) =>
    isOpen &&
    css`
      background: #315df7;
      color: #fff;
    `}
`;
