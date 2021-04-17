import * as React from 'react';
import styled from 'styled-components/macro';

import { Logo } from '../Logo';
import { Button } from '../Button';
import { Menus } from '../../routes';

import { ReactComponent as Menu } from '../../assets/menu.svg';

interface Props {}

export function Navbar(props: Props) {
  const [disable, setDisable] = React.useState(false);

  const notShow = () => {
    setDisable(true);
  };

  console.log(disable);

  return (
    <Wrapper>
      <Div>
        <ButtonHeader onClick={notShow}>
          <Menu />
        </ButtonHeader>
      </Div>
      <Logo />
      {Menus.map((value, index) => (
        <Button
          key={index}
          label={value.name}
          to={value.to}
          activeOnlyWhenActive={value.exact}
          index={value.index}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  z-index: 1000;
  background-color: rgb(48, 58, 72);
`;

const ButtonHeader = styled.button`
  border: 0px;
  background-color: rgb(27, 35, 48);
`;

const Div = styled.div`
  width: 300px;
  height: 70px;
  background-color: rgb(27, 35, 48);
  display: flex;
  justify-content: flex-end;

  svg {
    width: 25px;
    height: 25px;
    color: #fff;
  }
`;
