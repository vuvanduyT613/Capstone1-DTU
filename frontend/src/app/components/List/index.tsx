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
  console.log(data);
  return (
    <>
      <Header />
      <WrapperList>
        {Object.keys(data).length > 0 ? (
          //@ts-ignore
          data.results.map(value => (
            <Grid
              xs={4}
              justify="center"
              style={{ marginTop: '25px', marginBottom: '0px', height: '180px' }}
            >
              <Link
                to={`/doctor/detail?id=${value.id}&name=${value.fistName} ${value.lastName}&avatar=${value.avatar}&price=${value.price}&detail=${value.detail}`}
                style={{ textDecoration: 'none' }}
              >
                <ItemDoctor
                  avatar={value.avatar}
                  name={value.userName}
                  level={value.level}
                  specialize={value.specialize}
                  booking={value.booking}
                />
              </Link>
            </Grid>
          ))
        ) : (
          <></>
        )}
      </WrapperList>
    </>
  );
}

const WrapperList = styled.div`
  width: 100%;
  background: #FDFDFD;
  border-radius: 4px,
  top: 20px;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  `;
