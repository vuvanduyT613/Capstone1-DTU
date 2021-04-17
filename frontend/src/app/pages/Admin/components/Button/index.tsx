import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ReactComponent as Analysis } from '../../assets/analysis.svg';
import { ReactComponent as Bell } from '../../assets/bell.svg';
import { ReactComponent as Doctor } from '../../assets/doctor.svg';
import { ReactComponent as Intersection } from '../../assets/intersection-area.svg';
import { ReactComponent as Logout } from '../../assets/logout.svg';
import { ReactComponent as User } from '../../assets/user.svg';

interface Props {
  label: String;
  to: String;
  activeOnlyWhenActive: Boolean;
  index: Number;
}

const chooseIcon = param => {
  switch (param) {
    case 1:
      return <Analysis />;
    case 2:
      return <Bell />;
    case 3:
      return <Doctor />;
    case 4:
      return <Intersection />;
    case 5:
      return <Logout />;
    case 6:
      return <User />;
    default:
      <></>;
  }
};

const MenuLink = ({ label, to, activeOnlyWhenActive, index }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenActive}
      children={({ match }) => {
        return match ? (
          <Active>
            <Link to={to} className="link">
              <Image>{chooseIcon(index)}</Image>
              <Div>{label}</Div>
            </Link>
          </Active>
        ) : (
          <Noactive>
            <Link to={to}>
              <Image>{chooseIcon(index)}</Image>

              <Div>{label}</Div>
            </Link>
          </Noactive>
        );
      }}
    />
  );
};

export function Button(props: Props) {
  return (
    <Wrapper>
      <MenuLink
        label={props.label}
        to={props.to}
        activeOnlyWhenActive={props.activeOnlyWhenActive}
        index={props.index}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Div = styled.div`
  font-size: 16px;
  color: #fff;
`;

const Image = styled.image`
  width: 50px;
  height: 50px;

  svg {
    width: 20px;
    height: 20px;
    color: #fff;
  }
`;

const Active = styled.li`
  min-height: 40px;
  max-height: 250px;
  background-color: rgba(0, 0, 0, 0.5);
  padding-left: 25%;
  padding-top: 15px;
  list-style: none;

  a {
    text-decoration: none;
    display: flex;
  }
`;

const Noactive = styled.li`
  min-height: 40px;
  max-height: 250px;
  padding-left: 25%;
  padding-top: 15px;
  display: flex;
  list-style: none;

  a {
    text-decoration: none;
    display: flex;
  }
`;
