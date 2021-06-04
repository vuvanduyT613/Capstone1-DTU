import React /* useEffect, useState */ from 'react';
import styled from 'styled-components/macro';
import _get from 'lodash/get';
import Checkbox from 'rc-checkbox';
import Select from 'react-select';
import Cookies from 'js-cookie';
import Data from 'utils/static/data';
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';

interface customInputProps {}

const ListProduct = (props: customInputProps) => {
  const dispatch = useDispatch();

  const [isChecked, setChecked] = React.useState(false);
  const [condition, setCondition] = React.useState({
    province: ' ',
    type: ' ',
    price: ' ',
  });

  const customSelect = {
    container: base => ({
      ...base,
      borderRadius: '5px',
      height: '44px',
      padding: '10px',
    }),
    control: provided => ({
      ...provided,
      height: '44px',
      padding: 10,
      marginLeft: 0,
      border: '0px solid black',
      fontSize: '0.875rem',
      outline: 'none',
      textALign: 'center',
      color: 'rgb(71, 85, 105)',
      borderRadius: '0.25rem',
      lineHeight: '1.25rem',
      boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px',
    }),
    indicatorsContainer: () => ({
      '.myDropDown': {
        '&__dropdown-indicator': {
          marginTop: '-5px', // <--- Color of your choice
        },
      },
    }),
    indicatorSeparator: base => ({
      ...base,
      display: 'none',
    }),
    dropdownIndicator: base => ({
      ...base,
      color: ' #315DF7',
      marginTop: '-6px', // Custom colour
    }),
    singleValue: base => ({
      ...base,
    }),
    valueContainer: base => ({
      ...base,
      color: 'white',
      marginTop: '-4px',
      marginLeft: '-8px',
      width: '100%',
    }),
    option: base => ({
      ...base,
      height: '100%',
    }),
  };

  const apply = () => {
    Cookies.set('condition_clinic', condition.province);
    dispatch({
      type: 'GET_ALL_CLINIC_API',
      payload: {
        token: Cookies.get('access_token'),
        page: 1,
        limit: 6,
        query: condition.province,
      },
    });
    dispatch({
      type: 'GET_DOCTOR',
      payload: {
        page: 1,
        option: '',
        query: condition.province,
      },
    });
  };

  return (
    <Wrapper>
      <Header>
        <p>Search clinic</p>
        <a
          style={{
            cursor: 'pointer',
          }}
          onClick={() => {
            setChecked(false);
            console.log('hello');
          }}
        >
          {' '}
          Unchecked{' '}
        </a>
      </Header>
      <WrapperContent>
        <Content>
          <div style={{ paddingTop: '16px' }}>
            <Label>Province</Label>
            <Select
              onChange={e => setCondition({ ...condition, province: e.value })}
              placeholder={'Choose province/city'}
              options={Data}
              components={{
                IndicatorSeparator: () => null,
              }}
              styles={customSelect}
            />
          </div>
          <div style={{ paddingTop: '15px' }}>
            <Label>Type of clinic</Label>
            <Select
              //value={}
              onChange={e => setCondition({ ...condition, type: e.value })}
              placeholder={'Choose type'}
              options={[
                { value: 'Active', label: 'Active' },
                { value: 'Inactive', label: 'Inactive' },
              ]}
              components={{
                IndicatorSeparator: () => null,
              }}
              styles={customSelect}
            />
          </div>
        </Content>
      </WrapperContent>

      <WrapperContent style={{ paddingTop: '95px' }}>
        <Content>
          <HeaderText>Price segment</HeaderText>{' '}
          <Grid container style={{ padding: '0px 10px' }}>
            <Grid xs={6} style={{ display: 'flex' }}>
              <Checkbox
                style={{ display: 'flex', margin: 'auto 0px' }}
                defaultChecked={isChecked}
              />
              <P>Under 10 million</P>
            </Grid>
            <Grid xs={6} style={{ display: 'flex' }}>
              <Checkbox
                style={{ display: 'flex', margin: 'auto 0px' }}
                defaultChecked={isChecked}
              />{' '}
              <P> 5 - 8 million</P>
            </Grid>
            <Grid xs={6} style={{ display: 'flex' }}>
              <Checkbox
                style={{ display: 'flex', margin: 'auto 0px' }}
                defaultChecked={isChecked}
              />{' '}
              <P>1 - 3 million</P>
            </Grid>
            <Grid xs={6} style={{ display: 'flex' }}>
              <Checkbox
                style={{ display: 'flex', margin: 'auto 0px' }}
                defaultChecked={isChecked}
              />{' '}
              <P> 8 - 10 million</P>
            </Grid>
            <Grid xs={6} style={{ display: 'flex' }}>
              <Checkbox
                style={{ display: 'flex', margin: 'auto 0px' }}
                defaultChecked={isChecked}
              />
              <P>3 - 5 million</P>
            </Grid>
            <Grid xs={6} style={{ display: 'flex' }}>
              <Checkbox
                style={{ display: 'flex', margin: 'auto 0px' }}
                defaultChecked={isChecked}
              />
              <P>Over 10 million</P>
            </Grid>
          </Grid>
        </Content>
      </WrapperContent>

      <WrapperButton>
        <ItemExit onClick={apply}>
          <div>
            <p>Apply</p>
          </div>
        </ItemExit>
      </WrapperButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 20%;
  height: 106vh;
  background: #fdfdfd;
  position: fixed;
  right: 0px;
  top: 10px;
  border-radius: 4px;
`;

const WrapperContent = styled.div`
  padding: 30px;
  height: 204px;
  margin-top: -50px;
`;

const Header = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  margin-top: 40px;
  p {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;

    /* #00358E */

    color: #00358e;
  }
  a {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    margin: auto 0px auto auto;
    display: flex;
    align-items: center;
    text-align: right;

    /* Red */

    color: #ff3232;
  }
`;

const Content = styled.div`
  background: #eeeff1;
  height: 204px;
  border-radius: 4px;

  label {
    padding: 12px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height, or 133% */

    /* Title-Body text */

    color: #0b0d31;
  }
`;

const WrapperButton = styled.div`
  padding-top: 100px;
`;

const ItemExit = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  margin-top: 7%;

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
    width: 90%;
    height: 40px;
    /* #00358E */

    background: #00358e;
    opacity: 1;
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

const HeaderText = styled.p`
  margin: 0px;
  padding: 12px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height, or 133% */

  /* Title-Body text */

  color: #333333;
`;

const Label = styled.label`
  padding: 30px 0px 0px 13px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height, or 133% */

  /* Title-Body text */

  color: red;
`;

const P = styled.p`
  padding: 0px 0px 0px 10px !important;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  /* Title-Body text */

  color: #333333;
`;
export default ListProduct;
