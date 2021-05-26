import * as React from 'react';
import styled from 'styled-components/macro';
import { SubNav } from './SubNav';
import logoicon from './assets/logo.png';

export function Header() {
  return (
    <Wrapper>
      <WrapperLeft>
        <Div>
          <Element>
            <Img src={logoicon} />
          </Element>
          <Element>
            <p>Medical Schedule</p>
          </Element>
        </Div>
      </WrapperLeft>
      <WrapperRight>
        <SubNav />
      </WrapperRight>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const WrapperLeft = styled.div`
  display: block;
  width: 15%;
  height: 200px;
  background: #00358e;
`;

const WrapperRight = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  margin-top: -141px;
  background: #00358e;
`;

const Div = styled.div`
  width: 100%;
  margin-top: 10;
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: auto;
  margin-top: 40px;
`;

const Element = styled.div`
  justify-content: center;
  display: flex;

  p {
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 48px;
    /* identical to box height, or 200% */
    margin-top: 0;
    display: flex;
    align-items: center;

    /* #FFFFFF */

    color: #ffffff;
  }
`;
