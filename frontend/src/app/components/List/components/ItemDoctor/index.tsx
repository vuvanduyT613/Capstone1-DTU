/**
 *
 * List
 *
 */
import * as React from 'react';
import Image from '../../assets/test.jpg';

import styled from 'styled-components/macro';
interface Props {}

export function ItemDoctor(props: Props) {
  return (
    <>
      <Wrapper>
        <div>
          <Img src={Image} alt={`profile`} />
        </div>
        <WrapperContent>
          <p style={{ color: '#FD0D0D' }}> Nguyễn Duy Hưng </p>
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
`;

const WrapperContent = styled.div`
  margin-left: 20px;

  p {
    margin-top: 0px;
    font-family: Alata;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
`;

const Img = styled.img`
  min-width: 118px;
  height: 136px;
  background: url(165555bac-si-nguyen-van-toan.jpg), #fdfdfd;
  box-shadow: 2px 2px 4px rgba(20, 20, 20, 0.04);
  border-radius: 5px;
`;
