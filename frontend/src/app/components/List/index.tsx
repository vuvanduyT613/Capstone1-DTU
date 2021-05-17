/**
 *
 * List
 *
 */
import * as React from 'react';
import { ItemDoctor } from './components/ItemDoctor';
//import { useTranslation } from 'react-i18next';
import useStyles from './styles';

interface Props {}

export function List(props: Props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapperList}>
        <div className={classes.wrapperSize}>
          <div className={classes.header}>
            <p className={classes.left}>Doctor last week</p>
            <p className={classes.right}> View all</p>
          </div>
          <div>
            <ItemDoctor />
            <ItemDoctor />
            <ItemDoctor />
            <ItemDoctor />
          </div>{' '}
        </div>
      </div>
    </>
  );
}
