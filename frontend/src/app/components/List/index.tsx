/**
 *
 * List
 *
 */
import * as React from 'react';
import { ItemDoctor } from './components/ItemDoctor';
import { Header } from './components/Header';
//import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Container, Grid } from '@material-ui/core';
interface Props {
  data: Object;
}

export function List(props: Props) {
  const { data } = props;
  return (
    <>
      <div>
        <Header />
        <WrapperList>
          {Object.keys(data).length > 0 ? (
            //@ts-ignore
            data.results.map(value => (
              <Grid xs={4} justify="center" style={{ marginTop: '35px', marginBottom: '35px' }}>
                <Link
                  to={`/doctor/detail?id=${value.id}&name=${value.fistName} ${value.lastName}&avatar=${value.avatar}&price=${value.price}&detail=${value.detail}`}
                  style={{ textDecoration: 'none' }}
                >
                  <ItemDoctor avatar={value.avatar} name={value.userName} />
                </Link>
              </Grid>
            ))
          ) : (
            <></>
          )}
        </WrapperList>
      </div>
    </>
  );
}

const WrapperList = styled.div`
  width: 100%;
  height: 100%;
  background: #FDFDFD;
  border-radius: 4px,
  top: 20px;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  `;
