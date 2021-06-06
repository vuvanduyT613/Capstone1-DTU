import React /* useEffect, useState */ from 'react';
import styled from 'styled-components/macro';

const Header = props => {
  return (
    <>
      <WrapperHeader>
        <Title>
          <p>{`${props.title}`} </p>
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
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
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
  border: 1px solid rgba(114, 122, 142, 0.3);
  box-sizing: border-box;
  border-radius: 4px;
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
    font-size: 12px;
    line-height: 24px;
    /* identical to box height, or 200% */
    width: 70%;
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

export default Header;
