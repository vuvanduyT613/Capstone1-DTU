import * as React from 'react';
import styled from 'styled-components/macro';

export function Elipse(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 54px;
  height: 54px;
  background: rgba(0, 53, 142, 0.2);
  border-radius: 50%;

  svg {
    margin: 17px;
  }
`;
