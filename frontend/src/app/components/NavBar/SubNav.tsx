import { Grid } from '@material-ui/core';
import * as React from 'react';
import { Elipse } from './Elipse';
import styled from 'styled-components/macro';
import { ReactComponent as Heart } from './assets/ic_heart.svg';
import { ReactComponent as List } from './assets/ic_list.svg';
import { ReactComponent as Phone } from './assets/ic_phone.svg';
import { ReactComponent as People } from './assets/ic_people.svg';
import { ReactComponent as HeartSm } from './assets/ic_mini_heart.svg';
import { ReactComponent as ListSm } from './assets/ic_mini_analysis.svg';
import { ReactComponent as PhoneSm } from './assets/ic_mini_phone.svg';
import { ReactComponent as PeopleSm } from './assets/ic_mini_person.svg';

export function SubNav({ number }) {
  const [offset, setOffset] = React.useState(0);
  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <>
      {number === 2 ? (
        <>
          <DivSigle>
            <DivSvgSigle>
              <DivSvg>
                <HeartSm />
              </DivSvg>
              <DivSvg>
                <ListSm />
              </DivSvg>
              <DivSvg>
                <PhoneSm />
              </DivSvg>
              <DivSvg>
                <PeopleSm />
              </DivSvg>
            </DivSvgSigle>
          </DivSigle>
        </>
      ) : (
        <Div color={offset >= 70 ? '60px' : '340px'}>
          {offset >= 70 ? (
            <Wrapper>
              <WrapperLeft>
                <DivSvg>
                  <HeartSm />
                </DivSvg>
                <DivSvg>
                  <ListSm />
                </DivSvg>
                <DivSvg>
                  <PhoneSm />
                </DivSvg>
                <DivSvg>
                  <PeopleSm />
                </DivSvg>
              </WrapperLeft>
              <WrapperRight></WrapperRight>
            </Wrapper>
          ) : (
            <>
              <Grid
                container
                justify="center"
                style={{ width: '80%', marginLeft: '5%', marginTop: '15%', height: '200px' }}
              >
                <Grid xs={3} style={{ display: 'flex' }} justify="center">
                  <WrapperNav>
                    <Elipse>
                      {' '}
                      <Heart />
                    </Elipse>
                    <P> Registration Support Services</P>
                  </WrapperNav>
                </Grid>

                <Grid xs={3} style={{ display: 'flex' }} justify="center">
                  <WrapperNav>
                    <Elipse>
                      {' '}
                      <List />
                    </Elipse>
                    <P>look up the list of clinics</P>
                  </WrapperNav>
                </Grid>

                <Grid xs={3} style={{ display: 'flex' }} justify="center">
                  <WrapperNav>
                    <Elipse>
                      {' '}
                      <Phone />
                    </Elipse>
                    <P>Online support</P>
                  </WrapperNav>
                </Grid>

                <Grid xs={3} style={{ display: 'flex' }} justify="center">
                  <WrapperNav>
                    <Elipse>
                      {' '}
                      <People />
                    </Elipse>
                    <P>Looking for a doctor in charge</P>
                  </WrapperNav>
                </Grid>
              </Grid>
              <WrapperTop></WrapperTop>
            </>
          )}
        </Div>
      )}
    </>
  );
}

const Wrapper = styled.div`
  height: 64px;
  position: absolute;
  z-index: 11;
  top: 64px;
  display: flex;
  align-items: center;
`;

const DivSvg = styled.div`
  margin-left: 15px;
  width: 50%;
`;
const WrapperLeft = styled.div`
  position: absolute;
  margin-top: -134px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  width: 100%;
`;

const WrapperTop = styled.div`
  margin-top: 41px;
  margin-left: -110px;
`;

const WrapperRight = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  margin: 490%;
  justify-content: flex-end;
  svg {
    margin: auto;
  }
`;

const Div = styled.div`
  width: 100%;
  height: ${props => props.color};
  background: #00358e;
`;

const DivSigle = styled.div`
  width: 100%;
  height: 64px;
  background: #00358e;
  display: flex;
`;

const DivSvgSigle = styled.div`
  display: flex;
  margin-top: 12px;
  margin-left: 13px;
`;

const WrapperNav = styled.div`
  width: 80%;
  height: 60%;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #fdfdfd;
  box-shadow: 0px 8px 20px rgba(49, 93, 247, 0.1);
  border-radius: 4px;
`;

const P = styled.p`
  margin-left: 5px;
  font-family: Abhaya Libre SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  /* or 150% */

  display: flex;
  align-items: center;

  /* #00358E */

  color: #00358e;
`;
