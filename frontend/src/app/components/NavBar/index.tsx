import * as React from 'react';
import { Header } from './Header';
import useStyles from './styles';
import { Nav } from './Nav';

export function NavBar() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <Header />
      </div>
      <div className={classes.wrapperNavbar}>
        <Nav />
      </div>
    </>
  );
}
