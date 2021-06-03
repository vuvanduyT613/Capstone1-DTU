/**
 *
 * List
 *
 */
import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import Lazyload from 'react-lazyload';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components/macro';
import 'react-lazy-load-image-component/src/effects/blur.css';
interface Props {
  avatar?: string;
  name?: string;
  level?: string;
  specialize?: string;
  booking?: string;
}

export function ItemDoctor(props: Props) {
  return (
    <>
      <WrapperBorder>
        <Wrapper>
          <Lazyload once={true}>
            <WrapperImage>
              <LazyLoadImage
                src={props.avatar}
                effect="blur"
                alt={`profile`}
                width={'100%'}
                height={'100%'}
              />
            </WrapperImage>
          </Lazyload>
          <WrapperContent>
            <p style={{ color: '#00358E' }}> {props.name || <Skeleton />} </p>
            <p style={{ color: '#000' }}>
              {' '}
              {props.level ? props.level || <Skeleton /> : 'Associate Professor Ph.D'}{' '}
            </p>
            <p style={{ color: '#3091BB' }}>
              {' '}
              {props.specialize ? props.specialize || <Skeleton /> : 'Dermatology'}
            </p>
            <p style={{ color: '#727A8E' }}>
              {props.booking ? props.booking || <Skeleton /> : '25'} bookings
            </p>
          </WrapperContent>
        </Wrapper>
      </WrapperBorder>
    </>
  );
}

const Wrapper = styled.div`
  height: 136px;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const WrapperBorder = styled.div`
  width: 80%;
  height: 180px;
  margin: auto;
  background: #fdfdfd;
  border: 1px solid rgba(114, 122, 142, 0.3);
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;

  &:hover {
    border: 1px solid #00358e;
    background: rgba(0, 53, 142, 0.1);
  }
`;

const WrapperImage = styled.div`
  max-width: 138px;
  height: 100%;
  overflow: hidden;
  boxshadow: 2px 2px 4px rgba(20, 20, 20, 0.04);
  border-radius: 5px;
  svg {
    display: none;
  }
`;
const WrapperContent = styled.div`
  margin-left: 20px;

  p {
    font-family: Alata;
    font-style: normal;
    font-weight: normal;
    margin-top: -1px;
    font-family: Alata;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
`;

const Img = styled.img`
  height: 100%;
`;
