import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import profile from './profile.jpg';

interface Props {}

export function Logo(props: Props) {
  return (
    <Wrapper>
      <Link to="/">
        <Div>
          <Image src={profile} />
        </Div>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 130px;
  background-color: rgb(27, 35, 48);
`;

const Div = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
`;

const Image = styled.img`
  min-width: 5rem;
  height: 5rem;
`;
