import React /* useEffect, useState */ from 'react';
import styled from 'styled-components/macro';
import Demo from '../assets/demo.png';
import { Grid } from '@material-ui/core';
import { ReactComponent as Heart } from '../assets/ic_heart.svg';
import { Link } from 'react-router-dom';
interface customInputProps {}

const List = (props: customInputProps) => {
  return (
    <Wrapper>
      <Link to="/clinic/detail" style={{ textDecoration: 'none' }}>
        <Grid container spacing={2}>
          <Grid style={{ display: 'block' }} item xs={6} justify={'center'}>
            <WrapperAction>
              <WrapperImage>
                <WrapperSVG>
                  <Heart />
                </WrapperSVG>
                <Img src={Demo}></Img>
                <WrapperPrice>
                  <p>GIÁ GÓI: 1.800.000đ - 2.450.000đ</p>
                </WrapperPrice>
              </WrapperImage>
              <P1>Phòng khám Bệnh viện Đại học Y Dược 1</P1>
              <P2>20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM</P2>
            </WrapperAction>
          </Grid>
        </Grid>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 30px;
`;

const WrapperPrice = styled.div`
  background: rgba(49, 93, 247, 0.2);
  width: 100%;
  height: 45px;
  margin-top: -15px;
  border-radius: 0px 0px 10px 10px;

  p {
    text-decoration: none;
    padding-top: 12px;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    display: flex;
    align-items: center;
    text-align: right;

    /* #00358E */

    color: #00358e;
  }
`;
const WrapperAction = styled.div`
  width: 100%;
  height: 100%;

  &:hover {
    border: 1px solid #00358e;
    border-radius: 10px;
  }
`;

const WrapperSVG = styled.div`
  position: absolute;
  margin: 10% 0px auto 23%;
`;
const Img = styled.img`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
`;

const WrapperImage = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 10px;
`;

const P1 = styled.p`
  padding: 0px 10px;
  font-family: Alata;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;

  /* Title-Body text */

  color: #333333;
`;

const P2 = styled.p`
  padding: 0px 10px;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 21px;
  /* or 150% */

  display: flex;
  align-items: center;

  /* #727A8E */

  color: #727a8e;
`;
export default List;
