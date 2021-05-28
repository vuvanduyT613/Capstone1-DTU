/**
 *
 * List
 *
 */
import * as React from 'react';
import Image from '../../assets/test.jpg';

import styled from 'styled-components/macro';
interface Props {
  avatar: string;
  name: string;
}

export function ItemDoctor(props: Props) {
  return (
    <>
      <Wrapper>
        <WrapperImage
          style={{
            maxWidth: '138px',
            height: '100%',
            overflow: 'hidden',
            boxShadow: '2px 2px 4px rgba(20, 20, 20, 0.04)',
            borderRadius: '5px',
          }}
        >
          <Img src={props.avatar} alt={`profile`} />
        </WrapperImage>
        <WrapperContent>
          <p style={{ color: '#FD0D0D' }}> {props.name} </p>
          <p style={{ color: '#000' }}> Phó Giáo sư, Tiến sĩ</p>
          <p style={{ color: '#3091BB' }}>Da liễu - Cot Song</p>
          <p style={{ color: '#727A8E' }}>25 lượt đặt tuần qua</p>
        </WrapperContent>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  min-width: 400px;
  height: 136px;
  display: flex;
  justify-content: center;
`;
const WrapperImage = styled.div`
  &:hover {
    border: 2px solid #00358e;
  }
`;
const WrapperContent = styled.div`
  margin-left: 20px;

  p {
    font-family: Alata;
    font-style: normal;
    font-weight: normal;
    margin-top: 0px;
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
