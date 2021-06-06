import React /* useEffect, useState */ from 'react';
import styled from 'styled-components/macro';
import Lazyload from 'react-lazyload';
import Skeleton from 'react-loading-skeleton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ReactComponent as Heart } from '../assets/ic_heart.svg';
import { Link } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
interface ListProps {
  price?: number;
  name?: string;
  address?: string;
  district?: string;
  city?: string;
  image?: string;
  overview?: string;
  timeWorkStart?: string;
  timeWorkEnd?: string;
}

const List = (props: ListProps) => {
  const pay = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
    //@ts-ignore
    props.price,
  );

  return (
    <Wrapper>
      <Link
        to={`/clinic/detail?name=${props.name}&address=${props.address}&city=${props.city}&overview=${props.overview}&timeWorkStart=${props.timeWorkStart}&timeWorkEnd=${props.timeWorkEnd}`}
        style={{ textDecoration: 'none' }}
      >
        <WrapperAction>
          <WrapperImage>
            <WrapperSVG>
              <Heart />
            </WrapperSVG>
            <Lazyload once={true}>
              <WrapperImage>
                <LazyLoadImage
                  src={props.image}
                  effect="blur"
                  alt={`profile`}
                  width={'100%'}
                  height={'10%'}
                />
              </WrapperImage>
            </Lazyload>
          </WrapperImage>
          <WrapperPrice>
            <p>PRICE: {`${pay ? pay || <Skeleton /> : ''}`}</p>
          </WrapperPrice>
          <P1>{`${
            props.name ? props.name || <Skeleton /> : 'Phòng khám Bệnh viện Đại học Y Dược 1'
          }`}</P1>
          <P2>
            {' '}
            {`${
              props.address ? props.address || <Skeleton /> : ' 20-22 Dương Quang Trung, Phường 12'
            }, ${props.district ? props.district || <Skeleton /> : 'Quận 10'}, ${
              props.city ? props.city || <Skeleton /> : 'Tp. HCM'
            }`}
          </P2>
        </WrapperAction>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 45px;
  width: 100%;
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
  padding: 6px;

  /* #315DF7 */

  border: 1px solid #315df7;
  box-sizing: border-box;
  border-radius: 5px;

  &:hover {
    border: 1px solid #00358e;
    box-sizing: border-box;
    border-radius: 5px;
  }
`;

const WrapperSVG = styled.div`
  position: absolute;
  z-index: 5;
  margin: 8% 0px auto 19%;
  width: 36px;
  height: 36px;
  background: #fdfdfd;
  box-shadow: 2px 2px 5px rgba(0, 53, 142, 0.15);
  border-radius: 50%;
  svg {
    margin: 10px 0px auto 10px;
  }
`;
const Img = styled.img`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
`;

const WrapperImage = styled.div`
  max-height: 220px;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
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
