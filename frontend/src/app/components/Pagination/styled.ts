import styled from 'styled-components';
import { Pagination as BasePagination } from 'antd';

export const Pagination = styled(BasePagination)`
  margin-left: auto;
  display: flex;

  li {
    width: 34px;
    height: 34px;
    border: 1px solid #333333;
    border-radius: 4px;
    list-style: none;
    margin-left: 4px;
    text-align: center;

    a {
      border: 0 !important;
      font-family: Segoe UI;
    }

    path {
      fill: #333333;
    }

    &.ant-pagination-item,
    &.ant-pagination-jump-next {
      border-color: rgba(51, 51, 51, 0.3);

      a {
        color: #333333;
      }
    }

    &.ant-pagination-item-active {
      background: #315df7;
      border-color: #315df7;

      a {
        color: #fdfdfd !important;
      }
    }

    &.ant-pagination-disabled {
      opacity: 0.5;
    }
  }
`;

export const Wrapper = styled.div`
  font-family: Segoe UI;
  display: flex;
  align-items: center;
`;

export const Label = styled.div`
  background: #eeeff1;
  border-radius: 4px;
  padding: 7px 18px;
  margin-right: 8px;
  font-size: 14px;
  line-height: 21px;
  color: #2d3142;

  span {
    color: #727a8e;
  }
`;
