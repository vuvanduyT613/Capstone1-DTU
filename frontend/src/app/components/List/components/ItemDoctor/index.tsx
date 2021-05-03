/**
 *
 * List
 *
 */
import * as React from 'react';
import Image from '../../assets/test.jpg';
import useStyles from './styles';

interface Props {}

export function ItemDoctor(props: Props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapperItem}>
        <div className={classes.wrapperItemImage}>
          <img className={classes.imageItem} src={Image} />
        </div>
        <div className={classes.contentItem}>
          <p className={classes.name}> Nguyễn Duy Hưng </p>
          <p className={classes.p}> Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp</p>
          <p className={classes.specialize}>Da liễu</p>
          <p className={classes.count}>25 lượt đặt tuần qua</p>
        </div>
      </div>
    </>
  );
}
