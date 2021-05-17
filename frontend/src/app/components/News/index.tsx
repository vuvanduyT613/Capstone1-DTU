/**
 *
 * News
 *
 */
import * as React from 'react';
import useStyles from './styles';
import Test from './assets/test.jpg';

interface Props {}

export function News(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.wrapperNews}>
      <div className={classes.wrapperSize}>
        <div className={classes.navNews}>
          <p className={classes.navNewsName}>Recent news</p>
          <p className={classes.p}> View all</p>
          <div className={classes.pagination}>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 4.2625L8.81916 10L15 15.7375L13.0972 17.5L5 10L13.0972 2.5L15 4.2625Z"
                  fill="#315DF7"
                />
              </svg>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 4.2625L11.1808 10L5 15.7375L6.90283 17.5L15 10L6.90283 2.5L5 4.2625Z"
                  fill="#315DF7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={classes.contentNews}>
          <div className={classes.contentItemNews}>
            <div className={classes.imageItemNews}>
              <img src={Test} className={classes.image} alt="image1" />
            </div>
            <p>5 triệu chứng ung thư phổi có thể bạn không nhận ra</p>
            <p className={classes.timeItemNews}>00:09, 06/04/2021</p>
          </div>
          <div className={classes.contentItemNews}>
            <div className={classes.imageItemNews}>
              <img src={Test} className={classes.image} alt="image1" />
            </div>
            <p>5 triệu chứng ung thư phổi có thể bạn không nhận ra</p>
            <p className={classes.timeItemNews}>00:09, 06/04/2021</p>
          </div>
          <div className={classes.contentItemNews}>
            <div className={classes.imageItemNews}>
              <img src={Test} className={classes.image} alt="image1" />
            </div>
            <p>5 triệu chứng ung thư phổi có thể bạn không nhận ra</p>
            <p className={classes.timeItemNews}>00:09, 06/04/2021</p>
          </div>
          <div className={classes.contentItemNews}>
            <div className={classes.imageItemNews}>
              <img src={Test} className={classes.image} alt="image1" />
            </div>
            <p>5 triệu chứng ung thư phổi có thể bạn không nhận ra</p>
            <p className={classes.timeItemNews}>00:09, 06/04/2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}
