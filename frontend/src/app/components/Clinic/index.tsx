/**
 *
 * News
 *
 */
import * as React from 'react';
import useStyles from './styles';
import Test from './assets/test.jpg';

interface Props { }

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
              <img src={"https://gocnhineva.info/wp-content/uploads/2020/05/benh-vien-dai-hoc-y-duoc-1.jpg"} className={classes.image} alt="image1" />
            </div>
            <p>GIÁ GÓI: 1.800.000đ - 2.450.000đ</p>
            <p> Phòng khám Bệnh viện Đại học Y Dược 1 </p>
            <p> 20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM </p>
            <p className={classes.timeItemNews}>00:09, 06/04/2021</p>
          </div>
          <div className={classes.contentItemNews}>
            <div className={classes.imageItemNews}>
              <img src={"https://plasmakare.vn/wp-content/uploads/2020/11/Phong-kham-da-khoa-Hoang-Long---Cong-Ty-TNHH-Vu-Long-Hoa-Binh-1606296759.jpeg"} className={classes.image} alt="image1" />
            </div>
            <p> GIÁ GÓI: 1.800.000đ - 2.450.000đ </p>
            <p> Phòng Khám Đa Khoa Hoàng Long </p>
            <p> Tầng 10, Tòa tháp VCCI, Số 9 phố Đào Duy Anh, Quận Đống Đa, Hà Nội </p>
            <p className={classes.timeItemNews}>00:09, 06/04/2021</p>
          </div>
          <div className={classes.contentItemNews}>
            <div className={classes.imageItemNews}>
              <img src={"https://finizz.com/uploads/photo/picture/13274/avatar.jpg"} className={classes.image} alt="image1" />
            </div>
            <p> GIÁ GÓI: 1.800.000đ - 2.450.000đ </p>
            <p> Phòng khám Đa khoa Quốc tế Exson </p>
            <p> Số 722 Sư Vạn Hạnh, phường 12, Quận 10, Tp. Hồ Chí Minh </p>
            <p className={classes.timeItemNews}>00:09, 06/04/2021</p>
          </div>
          <div className={classes.contentItemNews}>
            <div className={classes.imageItemNews}>
              <img src={"https://baovietonline.com/wp-content/uploads/2018/07/b%E1%BB%87nh-vi%E1%BB%87n-b%E1%BA%A3o-l%C3%A3nh-thanh-to%C3%A1n-c%E1%BB%A7a-b%E1%BA%A3o-vi%E1%BB%87t.png"} className={classes.image} alt="image1" />
            </div>
            <p> GIÁ GÓI: 1.800.000đ - 2.450.000đ </p>
            <p> Phòng khám Đa khoa Quốc tế Exson </p>
            <p> Số 722 Sư Vạn Hạnh, phường 12, Quận 10, Tp. Hồ Chí Minh </p>
            <p className={classes.timeItemNews}>00:09, 06/04/2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}
