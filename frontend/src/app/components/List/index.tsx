/**
 *
 * List
 *
 */
import * as React from 'react';
import { ItemDoctor } from './components/ItemDoctor';
//import { useTranslation } from 'react-i18next';
import useStyles from './styles';

interface Props { }

export function List(props: Props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapperList}>
        <div className={classes.wrapperSize}>
          <div className={classes.header}>
            <p className={classes.left} style={{paddingLeft: '18%'}}>Tìm kiếm phòng khám</p>
            <p className={classes.right} style={{paddingLeft: '2%'}}> Bỏ chọn</p>
          </div>
          <div className="mt-3" style={{backgroundColor:'#EEEFF1',paddingLeft: '29%'}}>

          <span className="text-center">Tỉnh/thành</span>
          <div className="dropdown mt-3 mb-3" >
            <a className="btn btn-light dropdown-toggle col-10" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Chọn tỉnh thành
          </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <span>Loại hình phòng khám</span>
          <div className="dropdown mt-3 pb-3" >
            <a className="btn btn-light dropdown-toggle col-10" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Chọn loại hình
          </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

          </div>

          <div className=" mt-3" style={{backgroundColor:'#EEEFF1',paddingLeft: '20%'}}>
            <form className="row " >
            <p>Phân Khúc giá</p>
              <ul className="col-6">
                <li style={{ listStyle: 'none' }} >
                  <input className="mr-3"  type="checkbox" />
              Dưới 10tr
            </li>
                <li style={{ listStyle: 'none' }}>
                  <input className="mr-3" type="checkbox" />
              Dưới 5tr
            </li>
                <li style={{ listStyle: 'none' }}>
                  <input className="mr-3" type="checkbox" />
              Dưới 3tr
            </li>
              </ul>
              <ul className="col-6">
                <li style={{ listStyle: 'none' }}>
                  <input className="mr-3" type="checkbox" />
                  Dưới 3tr
                </li>
                <li style={{ listStyle: 'none' }}>
                  <input className="mr-3" type="checkbox" />
                  Dưới 3tr

                </li>
                <li style={{ listStyle: 'none' }}>
                  <input className="mr-3" type="checkbox" />
                  Dưới 3tr
                </li>
              </ul>
              <button type="submit" className="btn btn-primary">Áp dụng</button>
            </form>
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
