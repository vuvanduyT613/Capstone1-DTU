/**
 *
 * Pagination
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import PaginationMaterial from '@material-ui/lab/Pagination';
import * as S from './styled';

interface Props {
  current;
  total;
  pageSize;
  fucPagination: Function;
}

export function Pagination(props: Props) {
  //@ts-ignore
  const { current, total, pageSize } = props;

  const fromPostIndex = total && current && (current - 1) * pageSize + 1;
  const toPostIndex = fromPostIndex + pageSize - 1;
  const lastPostIndex = toPostIndex > total ? total : toPostIndex;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      <S.Wrapper>
        <S.Label>
          <span>Kết quả:</span> {fromPostIndex} - {lastPostIndex}
        </S.Label>
        <span>tổng {total}</span>
      </S.Wrapper>
      <WrapperPagination>
        <PaginationMaterial
          onChange={(e, value) => {
            props.fucPagination(value);
          }}
          count={pageSize}
          variant="outlined"
          shape="rounded"
        />
      </WrapperPagination>
    </Div>
  );
}

const Div = styled.div`
  padding: 30px;
  display: flex;
`;

const WrapperPagination = styled.div`
  margin: auto 0px 0px auto;
`;
