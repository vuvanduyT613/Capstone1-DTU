import * as React from 'react';
import styled from 'styled-components/macro';

export function Nav() {
  return (
    <>
      <Wrapper>
        <Item
          href="https://cansahin.gitbook.io/react-boilerplate-cra-template/"
          target="_blank"
          title="Documentation Page"
          rel="noopener noreferrer"
        >
          <Div />
          <DivContent>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 3H3V4.5H15V3ZM15.75 10.5V9L15 5.25H3L2.25 9V10.5H3V15H10.5V10.5H13.5V15H15V10.5H15.75ZM9 13.5H4.5V10.5H9V13.5Z"
                fill="#FDFDFD"
              />
            </svg>

            <p> Home</p>
          </DivContent>
        </Item>
        <Item
          href="https://cansahin.gitbook.io/react-boilerplate-cra-template/"
          target="_blank"
          title="Documentation Page"
          rel="noopener noreferrer"
        >
          <DivContentNone>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 8.25V3.75L9 1.5L6.75 3.75V5.25H2.25V15.75H15.75V8.25H11.25ZM5.25 14.25H3.75V12.75H5.25V14.25ZM5.25 11.25H3.75V9.75H5.25V11.25ZM5.25 8.25H3.75V6.75H5.25V8.25ZM9.75 14.25H8.25V12.75H9.75V14.25ZM9.75 11.25H8.25V9.75H9.75V11.25ZM9.75 8.25H8.25V6.75H9.75V8.25ZM9.75 5.25H8.25V3.75H9.75V5.25ZM14.25 14.25H12.75V12.75H14.25V14.25ZM14.25 11.25H12.75V9.75H14.25V11.25Z"
                fill="#333333"
              />
            </svg>

            <p> Clinic</p>
          </DivContentNone>
        </Item>
        <Item
          href="https://cansahin.gitbook.io/react-boilerplate-cra-template/"
          target="_blank"
          title="Documentation Page"
          rel="noopener noreferrer"
        >
          <DivContentNone>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 3.00001H3.00001C2.80324 2.99951 2.60832 3.03802 2.42652 3.11332C2.24473 3.18861 2.07967 3.2992 1.94088 3.43869C1.80209 3.57818 1.69233 3.74379 1.61794 3.92596C1.54356 4.10813 1.50602 4.30324 1.50751 4.50001L1.50001 13.5C1.49932 13.6972 1.53764 13.8926 1.61278 14.0749C1.68791 14.2572 1.79838 14.4228 1.9378 14.5622C2.07723 14.7016 2.24286 14.8121 2.42516 14.8872C2.60747 14.9624 2.80283 15.0007 3.00001 15H15C15.1972 15.0007 15.3926 14.9624 15.5749 14.8872C15.7572 14.8121 15.9228 14.7016 16.0622 14.5622C16.2016 14.4228 16.3121 14.2572 16.3872 14.0749C16.4624 13.8926 16.5007 13.6972 16.5 13.5V4.50001C16.5007 4.30283 16.4624 4.10747 16.3872 3.92516C16.3121 3.74286 16.2016 3.57723 16.0622 3.4378C15.9228 3.29838 15.7572 3.18791 15.5749 3.11278C15.3926 3.03764 15.1972 2.99932 15 3.00001ZM15 13.5H3.00001V9.00001H15V13.5ZM15 6.00001H3.00001V4.50001H15V6.00001Z"
                fill="#333333"
              />
            </svg>

            <p> Delivery</p>
          </DivContentNone>
        </Item>
        <Item
          href="https://cansahin.gitbook.io/react-boilerplate-cra-template/"
          target="_blank"
          title="Documentation Page"
          rel="noopener noreferrer"
        >
          <DivContentNone>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 3H3C2.60348 3.00198 2.22387 3.16089 1.94418 3.44198C1.6645 3.72307 1.5075 4.10347 1.5075 4.5L1.5 13.5C1.50119 13.8975 1.6596 14.2783 1.94065 14.5593C2.2217 14.8404 2.60254 14.9988 3 15H15C15.3975 14.9988 15.7783 14.8404 16.0594 14.5593C16.3404 14.2783 16.4988 13.8975 16.5 13.5V4.5C16.4988 4.10254 16.3404 3.7217 16.0594 3.44065C15.7783 3.1596 15.3975 3.00119 15 3ZM15 6L9 9.75L3 6V4.5L9 8.25L15 4.5V6Z"
                fill="#333333"
              />
            </svg>

            <p> Mailbox</p>
          </DivContentNone>
        </Item>
        <Item
          href="https://cansahin.gitbook.io/react-boilerplate-cra-template/"
          target="_blank"
          title="Documentation Page"
          rel="noopener noreferrer"
        >
          <DivContentNone>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 11.625V13.125H16.5V11.625H1.5ZM1.5 7.875V9.375H16.5V7.875H1.5ZM1.5 4.125V5.625H16.5V4.125H1.5Z"
                fill="#333333"
              />
            </svg>

            <p> Personal</p>
          </DivContentNone>
        </Item>
      </Wrapper>
      <WrapperExit>
        <ItemExit>
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M7.97344 14.6443H1.99334C1.62656 14.6443 1.32891 14.3466 1.32891 13.9799V2.01974C1.32891 1.65296 1.62659 1.3553 1.99334 1.3553H7.97344C8.34087 1.3553 8.63787 1.0583 8.63787 0.690867C8.63787 0.32343 8.34087 0.0263672 7.97344 0.0263672H1.99334C0.894344 0.0263672 0 0.920742 0 2.01974V13.9799C0 15.0789 0.894344 15.9732 1.99334 15.9732H7.97344C8.34087 15.9732 8.63787 15.6762 8.63787 15.3088C8.63787 14.9413 8.34087 14.6443 7.97344 14.6443Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M15.8018 7.52664L11.7619 3.53992C11.5015 3.28211 11.0802 3.28546 10.8224 3.54658C10.5646 3.80771 10.5672 4.2283 10.8291 4.48611L13.7161 7.33527H5.97987C5.61243 7.33527 5.31543 7.63227 5.31543 7.99971C5.31543 8.36714 5.61243 8.66417 5.97987 8.66417H13.7161L10.8291 11.5133C10.5673 11.7711 10.5653 12.1917 10.8224 12.4529C10.9526 12.5844 11.1241 12.6509 11.2955 12.6509C11.4643 12.6509 11.633 12.5871 11.7619 12.4595L15.8018 8.47277C15.9281 8.34786 15.9998 8.17774 15.9998 7.99967C15.9998 7.82167 15.9287 7.65224 15.8018 7.52664Z"
                  fill="#FDFDFD"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>Sign out</p>
          </div>
        </ItemExit>
      </WrapperExit>
    </>
  );
}

const Wrapper = styled.nav`
  display: block;
  padding-top: 40px;
  height: 92%;
`;

const WrapperExit = styled.nav`
  display: block;
  height: 8%;
`;

const Div = styled.div`
    width: 5px;
    height: 51px;
    margin-left: -16px;
    background: #00358E;
    border-radius: 4px;
    transform: matrix(1, 0, 0, -1, 0, 0);
}
`;

const DivContent = styled.div`
  display: flex;
  margin-left: 15px;
  min-width: 160px;
  height: 51px;
  background: #00358e;
  border-radius: 4px;

  svg {
    margin: auto 9px auto 40px;
  }

  p {
    font-family: Alata;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;

    /* #FFFFFF */

    color: #fdfdfd;
  }
`;

const DivContentNone = styled.div`
  display: flex;
  margin-left: 5px;
  width: 100%;
  height: 51px;
  border-radius: 4px;

  svg {
    margin: auto 9px auto 40px;
  }

  p {
    font-family: Alata;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* or 150% */

    display: flex;
    align-items: center;

    /* Title-Body text */

    color: #333333;
  }
`;

const Item = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;

const ItemExit = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }

  div {
    width: 160px;
    height: 40px;
    /* #00358E */

    background: #00358e;
    opacity: 0.2;
    border-radius: 4px;
    display: flex;

    svg {
      margin: auto 9px auto 40px;
    }

    p {
      font-family: Abhaya Libre SemiBold;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      /* identical to box height, or 150% */

      display: flex;
      align-items: center;
      text-align: center;

      /* Background White */

      color: #fdfdfd;
    }
  }
`;
