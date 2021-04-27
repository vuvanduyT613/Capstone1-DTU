import * as React from 'react';
import styled from 'styled-components/macro';
import { SubNav } from './SubNav';
import logoicon from './assets/logo.png';

export function Header() {
  return (
    <Wrapper>
      <WrapperTop>
        <Div>
          <Img src={logoicon} />
          <p>Medical Schedule</p>
        </Div>
        <Divsvg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.5C12.5299 21.4984 13.0377 21.2872 13.4125 20.9125C13.7872 20.5377 13.9984 20.0299 14 19.5H10C10 20.0304 10.2107 20.5391 10.5858 20.9142C10.9609 21.2893 11.4696 21.5 12 21.5ZM18 15.5V10.5C18 7.43 16.36 4.86 13.5 4.18V3.5C13.5 3.10218 13.342 2.72064 13.0607 2.43934C12.7794 2.15804 12.3978 2 12 2C11.6022 2 11.2206 2.15804 10.9393 2.43934C10.658 2.72064 10.5 3.10218 10.5 3.5V4.18C7.63 4.86 6 7.42 6 10.5V15.5L4 17.5V18.5H20V17.5L18 15.5Z"
              fill="#FDFDFD"
            />
          </svg>
        </Divsvg>
      </WrapperTop>

      <WrapperBottom>
        <SubNav />
      </WrapperBottom>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: block;
  align-items: center;
  width: 100%;
`;

const WrapperTop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const WrapperBottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const Div = styled.div`
  width: 50%;
  p {
    margin-left: 14px;
    margin-top: 0px !important;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 48px;
    /* identical to box height, or 200% */

    display: flex;
    align-items: center;

    /* #FFFFFF */

    color: #ffffff;
  }
`;

const Divsvg = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  margin-right: 41px;
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-left: 65px;
`;
