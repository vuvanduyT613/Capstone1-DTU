import React /* useEffect, useState */ from 'react';
import styled from 'styled-components/macro';
import _get from 'lodash/get';

import Select from 'react-select';

import Checkbox from '@material-ui/core/Checkbox';
import { Grid } from '@material-ui/core';

interface customInputProps {}

const ListProduct = (props: customInputProps) => {
  const [textSearch, setTextSearch] = React.useState('');
  const fucPagination = value => {
    console.log(value);
  };
  return (
    <Wrapper>
      <Header>
        <p>Search clinic</p>
        <a> Unchecked </a>
      </Header>
      <WrapperContent>
        <Content>
          <div style={{ paddingTop: '16px' }}>
            <Label>Province</Label>
            <Select
              //value={}
              //onChange={e => setFieldValue('status', e.value)}
              placeholder={'Choose your status'}
              options={[
                { value: 'Active', label: 'Active' },
                { value: 'Inactive', label: 'Inactive' },
              ]}
              components={{
                IndicatorSeparator: () => null,
              }}
              styles={{
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
              }}
            />
          </div>
          <div style={{ paddingTop: '15px' }}>
            <Label>Type of clinic</Label>
            <Select
              //value={}
              //onChange={e => setFieldValue('status', e.value)}
              placeholder={'Choose your status'}
              options={[
                { value: 'Active', label: 'Active' },
                { value: 'Inactive', label: 'Inactive' },
              ]}
              components={{
                IndicatorSeparator: () => null,
              }}
              styles={{
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
                  width: '70%',
                }),
                option: base => ({
                  ...base,
                  height: '90%',
                }),
              }}
            />
          </div>
        </Content>
      </WrapperContent>

      <WrapperContent style={{ paddingTop: '80px' }}>
        <Content>
          <p>Price segment</p>{' '}
          <Grid container>
            <Grid
              xs={6}
              style={{
                fontFamily: 'Segoe UI',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '13px',
                lineHeight: '21px',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '-0.02em',
                color: '#333333',
              }}
            >
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              Under 10 million
            </Grid>
            <Grid
              xs={6}
              style={{
                fontFamily: 'Segoe UI',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '13px',
                lineHeight: '21px',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '-0.02em',
                color: '#333333',
              }}
            >
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              5 - less than 8 million
            </Grid>
            <Grid
              xs={6}
              style={{
                fontFamily: 'Segoe UI',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '13px',
                lineHeight: '21px',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '-0.02em',
                color: '#333333',
              }}
            >
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              1 - less than 3 million
            </Grid>
            <Grid
              xs={6}
              style={{
                fontFamily: 'Segoe UI',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '13px',
                lineHeight: '21px',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '-0.02em',
                color: '#333333',
              }}
            >
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              8 - 10 million won
            </Grid>
            <Grid
              xs={6}
              style={{
                fontFamily: 'Segoe UI',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '13px',
                lineHeight: '21px',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '-0.02em',
                color: '#333333',
              }}
            >
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              3 - less than 5 million
            </Grid>
            <Grid
              xs={6}
              style={{
                fontFamily: 'Segoe UI',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '13px',
                lineHeight: '21px',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '-0.02em',
                color: '#333333',
              }}
            >
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              Over 10 million won
            </Grid>
          </Grid>
        </Content>
      </WrapperContent>

      <WrapperButton>
        <ItemExit onClick={() => {}}>
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
  height: 93vh;
  background: #fdfdfd;
  position: absolute;
  right: 0px;
  top: 60px;
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

  p {
    font-family: Abhaya Libre Medium;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;

    /* #00358E */

    color: #00358e;
  }
  a {
    font-family: Abhaya Libre SemiBold;
    font-style: normal;
    font-weight: 600;
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
    font-family: Abhaya Libre Medium;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height, or 133% */

    /* Title-Body text */

    color: #0b0d31;
  }

  p {
    padding: 10px;
    font-family: Abhaya Libre Medium;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height, or 133% */

    /* Title-Body text */

    color: #333333;
  }
`;

const WrapperButton = styled.div`
  padding-top: 200px;
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

const Label = styled.label`
  padding: 30px 0px 0px 13px;
`;
export default ListProduct;
