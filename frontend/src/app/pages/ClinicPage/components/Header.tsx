import React /* useEffect, useState */ from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import styled from 'styled-components/macro';

const Header = props => {
  const [textSearch, setTextSearch] = React.useState('');

  return (
    <>
      <WrapperHeader>
        <Title>
          <p>Clinic </p>
          <WrapperInput>
            <div style={{ display: 'flex', marginRight: '15px' }}>
              <Input />
              <Icon>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9167 9.66668H10.2584L10.025 9.44168C10.9388 8.377 11.4046 6.99969 11.3246 5.59891C11.2445 4.19813 10.6249 2.88284 9.59574 1.92918C8.5666 0.975529 7.208 0.457688 5.80519 0.484381C4.40238 0.511075 3.06446 1.08023 2.07235 2.07235C1.08023 3.06446 0.511075 4.40238 0.484381 5.80519C0.457688 7.208 0.975529 8.5666 1.92918 9.59574C2.88284 10.6249 4.19813 11.2445 5.59891 11.3246C6.99969 11.4046 8.377 10.9388 9.44168 10.025L9.66668 10.2584V10.9167L13.8334 15.075L15.075 13.8334L10.9167 9.66668ZM5.91668 9.66668C5.175 9.66668 4.44998 9.44675 3.83329 9.03469C3.21661 8.62264 2.73596 8.03697 2.45214 7.35175C2.16831 6.66652 2.09404 5.91252 2.23874 5.18509C2.38343 4.45767 2.74059 3.78948 3.26503 3.26503C3.78948 2.74059 4.45767 2.38343 5.18509 2.23874C5.91252 2.09404 6.66652 2.16831 7.35175 2.45213C8.03697 2.73596 8.62264 3.21661 9.03469 3.83329C9.44675 4.44998 9.66668 5.175 9.66668 5.91668C9.66734 6.40933 9.57079 6.89726 9.38257 7.35252C9.19435 7.80779 8.91815 8.22145 8.5698 8.5698C8.22145 8.91815 7.80779 9.19435 7.35252 9.38257C6.89726 9.57079 6.40933 9.66734 5.91668 9.66668Z"
                    fill="#FDFDFD"
                  />
                </svg>
              </Icon>
            </div>
          </WrapperInput>
          <WrappperAction>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.294 0.000217014C13.4503 0.00565665 12.6178 0.163931 11.8525 0.464371C11.0873 0.764812 10.4072 1.20044 9.85798 1.74188C9.30877 1.20044 8.62864 0.764812 7.86342 0.464371C7.09821 0.163931 6.2657 0.00565665 5.422 0.000217014C4.70807 -0.00568457 3.99991 0.108837 3.33896 0.337081C2.67801 0.565325 2.07754 0.902708 1.57269 1.32949C1.06784 1.75627 0.668738 2.26389 0.398742 2.82263C0.128746 3.38137 -0.00672443 3.98002 0.000256711 4.58355C0.000256711 7.73355 3.35188 10.3002 8.42861 14.2002L9.85798 15.2919L11.2873 14.1919C16.3641 10.3002 19.7157 7.73355 19.7157 4.58355C19.7227 3.98002 19.5872 3.38137 19.3172 2.82263C19.0472 2.26389 18.6481 1.75627 18.1433 1.32949C17.6384 0.902708 17.038 0.565325 16.377 0.337081C15.7161 0.108837 15.0079 -0.00568457 14.294 0.000217014ZM9.95656 12.9585L9.85798 13.0419L9.7594 12.9585C5.06713 9.36688 1.9718 6.99188 1.9718 4.58355C1.96072 4.19797 2.04239 3.8145 2.21186 3.4564C2.38132 3.0983 2.63506 2.77303 2.95767 2.5003C3.28029 2.22757 3.66507 2.01308 4.08867 1.86982C4.51228 1.72656 4.96589 1.65752 5.422 1.66688C6.17126 1.66996 6.90321 1.85764 7.52825 2.20694C8.15329 2.55623 8.64431 3.052 8.94121 3.63355H10.7846C11.0783 3.05176 11.5672 2.55546 12.1909 2.20595C12.8146 1.85644 13.5457 1.66903 14.294 1.66688C14.7501 1.65752 15.2037 1.72656 15.6273 1.86982C16.0509 2.01308 16.4357 2.22757 16.7583 2.5003C17.0809 2.77303 17.3346 3.0983 17.5041 3.4564C17.6736 3.8145 17.7552 4.19797 17.7442 4.58355C17.7442 6.99188 14.6488 9.36688 9.95656 12.9585Z"
                fill="#315DF7"
              />
            </svg>
            <p> interested clinic</p>
          </WrappperAction>
        </Title>
      </WrapperHeader>
    </>
  );
};

const WrapperHeader = styled.div`
  padding: 0px 30px 0px 30px;
`;
const Title = styled.div`
  display: flex;

  p {
    width: 55%;
    font-family: Alata;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;
    color: #00358e;
  }
`;
const WrapperInput = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 45%;
`;

const Input = styled.input`
  width: 400px;
  height: 40px;
  text-indent: 8px;
  margin: auto 0px auto auto;
  background: #fdfdfd;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;
  border: 1px solid rgba(114, 122, 142, 0.3);
  box-sizing: border-box;
  border-radius: 4px;

  &:focus {
    border-radius: 4px;
    border: 1px solid #00358e;
    outline: 0px;
  }

  &:hover {
    border-radius: 4px;
    outline: 0px;
  }
`;

const Icon = styled.div`
  width: 26px;
  height: 26px;
  /* #315DF7 */
  background: #315df7;
  border-radius: 4px;
  margin: 22px 0px 0px -31px;
  svg {
    margin-left: 5px;
  }
`;

const WrappperAction = styled.div`
  width: 200px;
  height: 40px;
  margin: auto 0px auto 10px;
  background: rgba(49, 93, 247, 0.2);
  border-radius: 4px;
  display: flex;

  svg {
    margin: auto;
  }

  p {
    font-family: Segoe UI;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;
    /* identical to box height, or 200% */
    width: 70%;
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

export default Header;
