/**
 *
 * PopUp
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useStyles from 'app/pages/Admin/components/Cards/styles';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from 'store/reducers';
import queryString from 'query-string';
import { useLocation, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import CustomInput from './components/CustomInput';

interface Props {}

export function PopUp(props: Props) {
  const { step } = useSelector((state: rootState) => state.authenReducer.signUp);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const classes = useStyles();
  const [time, setTime] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [ladingPage, setLadingPage] = React.useState(1);
  const { search } = useLocation();
  const data = queryString.parse(search);

  const pay = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
    //@ts-ignore
    data.price,
  );

  const CustomInputDatePicker = React.forwardRef((props: any, ref) => {
    return (
      <div>
        <input
          style={{
            height: '44px',
            width: '100% ',
            padding: '0.75rem',
            outline: 'none',
            color: 'rgba(71, 85, 105,1)',
            borderRadius: '0.25rem',
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            border: '1px solid #000',
            boxShadow: ' 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            '&:hover': {
              outline: 20,
              boreder: '1px solid #000',
            },
          }}
          {...props}
          ref={ref}
        />
      </div>
    );
  });

  const filterPassedTime = time => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  const { t, i18n } = useTranslation();
  return (
    <Div>
      {open === true && step === 0 ? <Redirect to="/doctor"></Redirect> : <></>}
      {ladingPage === 1 ? (
        <>
          <DialogTitle
            style={{
              fontFamily: 'Abhaya Libre Medium',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: '36px',
              color: '#00358E',
              textAlign: 'center',
              marginTop: '50px',
            }}
            id="draggable-dialog-title"
          >
            MEDIAL REGISTER
          </DialogTitle>
          <WrapperContent>
            <WrapperDatePicker>
              <DatePicker
                wrapperClassName={classes.wrapper}
                selected={time}
                onChange={date => {
                  setTime(date);
                }}
                isClearable={true}
                customInput={<CustomInputDatePicker />}
                showTimeSelect
                filterTime={filterPassedTime}
                dateFormat="MMMM d, yyyy h:mm"
              />
            </WrapperDatePicker>
            <CustomInput defaultvalue={Cookies.get('user_name')} off={true}></CustomInput>
            <CustomInput defaultvalue={Cookies.get('user_phone')} off={true}></CustomInput>
            <CustomInput defaultvalue={Cookies.get('email')} off={true}></CustomInput>

            <ItemExit
              onClick={() => {
                setLadingPage(2);
              }}
            >
              <div>
                <p>Medical register</p>
              </div>
            </ItemExit>
          </WrapperContent>
        </>
      ) : ladingPage === 2 ? (
        <>
          <WrapperContentW2>
            <table style={{ width: '90%' }}>
              <tr>
                <th>Room</th>
                <th>Zone</th>
                <th>Floor</th>
                <th>Time</th>
              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}>403</td>
                <td style={{ textAlign: 'center' }}>B</td>
                <td style={{ textAlign: 'center' }}>4</td>
                <td
                  style={{ textAlign: 'center' }}
                >{`${time.getHours()}:${time.getMinutes()} - ${time.getHours()}:${
                  time.getMinutes() + 29
                } ${time.getHours() <= 12 ? ' AM' : 'PM'}`}</td>
              </tr>
            </table>
          </WrapperContentW2>
          <WrapperPrice>
            <span>Price does not include VAT</span>
            <p>{`${pay}`}</p>
            <span>Price includes VAT</span>
            <p>{`${pay}`}</p>
          </WrapperPrice>
          <WrapperAction>
            <ItemExit
              onClick={() => {
                dispatch({
                  type: 'CREATE_ALL_APPOINTMENT_CLIENT_API',
                  payload: {
                    doctorID: data.id,
                    userID: Cookies.get('user_id'),
                    time: time,
                    price: data.price,
                    status: 'Inactive',
                    doctor_name: data.name,
                    token: Cookies.get('access_token'),
                  },
                });
                setOpen(true);
              }}
            >
              <div>
                <p>Reservations</p>
              </div>
            </ItemExit>
          </WrapperAction>
        </>
      ) : (
        <></>
      )}
    </Div>
  );
}

const Div = styled.div`
  height: 450px;
`;

const WrapperAction = styled.div`
  width: 100%;
  height: 27%;
  background: rgba(255, 152, 50, 0.2);
  border-radius: 0px 0px 4px 4px;
  display: grid;
`;
const WrapperContentW2 = styled.div`
  width: 90%;
  margin-top: 35px;
  display: flex;
  justify-content: center;
`;
const WrapperContent = styled.div``;

const WrapperPrice = styled.div`
  padding: 40px;

  p {
    font-family: Segoe UI;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;

    /* Title-Body text */

    color: #333333;
  }
`;

const WrapperDatePicker = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  margin: auto;
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
    width: 35%;
    height: 44px;
    margin-top: 20px;
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
