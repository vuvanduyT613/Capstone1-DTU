import * as React from 'react';
import styled from 'styled-components/macro';
import Cookies from 'js-cookie';
import { Route, Link } from 'react-router-dom';
import { ReactComponent as Doctor } from './assets/ic_doctor.svg';
import { ReactComponent as Delivery } from './assets/ic_delivery.svg';
import { ReactComponent as Clinic } from './assets/ic_clinic.svg';
import { ReactComponent as Mail } from './assets/ic_mail.svg';
import { ReactComponent as Person } from './assets/ic_person.svg';
import { ReactComponent as DoctorWhite } from './assets/ic_doctor_white.svg';
import { ReactComponent as DeliveryWhite } from './assets/ic_delivery_white.svg';
import { ReactComponent as ClinicWhite } from './assets/ic_clinic_white.svg';
import { ReactComponent as MailWhite } from './assets/ic_mail_white.svg';
import { ReactComponent as PersonWhite } from './assets/ic_person_white.svg';

export function Nav() {
  const Menus = [
    {
      name: 'Doctor',
      to: '/doctor',
      exact: false,
    },
    {
      name: 'Clinic',
      to: '/clinic',
      exact: false,
    },
    {
      name: 'Delivery',
      to: '/delivery',
      exact: false,
    },
    {
      name: 'Mailbox',
      to: '/mailbox',
      exact: false,
    },
    {
      name: 'Personal',
      to: '/personal',
      exact: false,
    },
  ];

  const MenuLink = ({ Label, to, activeOnlyWhenActive, index }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenActive}
        children={({ match }) => {
          const active = match ? true : false;
          return (
            <Link
              to={to}
              style={{
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'flex',
                padding: '0.25rem 1rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                alignItems: 'center',
              }}
            >
              {active === true ? (
                <>
                  <Div />
                  <DivContent>
                    {index === 0 ? (
                      <DoctorWhite />
                    ) : index === 1 ? (
                      <ClinicWhite />
                    ) : index === 2 ? (
                      <DeliveryWhite />
                    ) : index === 3 ? (
                      <MailWhite />
                    ) : (
                      <PersonWhite />
                    )}
                    <p> {Label}</p>
                  </DivContent>{' '}
                </>
              ) : (
                <>
                  <DivContentNone>
                    {index === 0 ? (
                      <Doctor style={{ color: '#000' }} />
                    ) : index === 1 ? (
                      <Clinic />
                    ) : index === 2 ? (
                      <Delivery />
                    ) : index === 3 ? (
                      <Mail />
                    ) : (
                      <Person />
                    )}
                    <p> {Label}</p>
                  </DivContentNone>
                </>
              )}
            </Link>
          );
        }}
      />
    );
  };

  return (
    <>
      <Wrapper>
        {Menus.map((value, index) => (
          <MenuLink
            key={index}
            Label={value.name}
            to={value.to}
            activeOnlyWhenActive={value.exact}
            index={index}
          />
        ))}
      </Wrapper>
      <WrapperExit>
        <ItemExit
          href="/"
          onClick={() => {
            Cookies.remove('access_refresh');
            Cookies.remove('access_token');
            Cookies.remove('role');
          }}
        >
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
  min-width: 95%;
  height: 51px;
  background: #00358e;
  border-radius: 4px;
  svg {
    margin: auto 9px auto 30%;
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
  width: 95%;
  height: 51px;
  border-radius: 4px;

  svg {
    margin: auto 9px auto 30%;
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
    width: 100%;
    height: 40px;
    /* #00358E */

    background: #00358e;
    opacity: 0.2;
    border-radius: 4px;
    display: flex;
    justify-content: center;

    svg {
      margin: auto 9px auto 0px;
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
