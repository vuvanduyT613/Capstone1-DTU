import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
//import Images from '../../../asset/image';
import { color } from '../../../asset/constant/color';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapperSignUp: {
      width: '100%',
      textAlign: 'center',
    },
    wrapperForm: {
      width: '100%',
    },
    prevBtn: {
      width: '100%',
      border: 'none',
      borderRadius: 4,
      fontSize: 18,
      color: color.otherBlue,
      fontWeight: 500,
      paddingTop: 14,
      paddingBottom: 14,
      cursor: 'pointer',
      background: 'unset',
      outline: 'none',
    },
    continueBtn: {
      width: '100%',
      height: '50px',
      marginTop: 30,
      border: 'unset',
      borderRadius: 4,
      fontSize: 18,
      color: color.white,
      fontWeight: 500,
      paddingTop: 14,
      paddingBottom: 14,
      cursor: 'pointer',
      background: color.blue,
      position: 'relative',
      outline: 'none',
    },
    continueDisable: {
      width: '100%',
      height: '50px',
      marginTop: 30,
      border: 'unset',
      borderRadius: 4,
      fontSize: 18,
      color: color.white,
      fontWeight: 500,
      paddingTop: 14,
      paddingBottom: 14,
      cursor: 'pointer',
      background: 'rgba(0, 53, 142, 0.2)',
      position: 'relative',
      outline: 'none',
    },
    step: {
      position: 'absolute',
      fontWeight: 600,
      fontSize: 14,
      color: color.otherWhite,
      opacity: 0.5,
      right: 140,
      top: 15,
    },
    otpCode: {
      width: 'unset !important',
      textAlign: 'center',
      '& > div > input': {
        fontWeight: 400,
        fontSize: '16px',
        color: color.black,
        marginRight: '14px',
        width: '60px !important',
        height: '60px !important',
        border: '1px solid #DBDFE1',
        boxSizing: 'border-box',
        borderRadius: '4px',
        '&:focus': {
          outline: 'none',
          // border: '1px solid #E9781C',
          caretColor: color.black,
        },
        // '&:focus + input':{
        //   borderRight:'1px solid #DBDFE1',
        //   borderLeft:'1px solid #DBDFE1'
        // },
        '&:first-child': {
          borderTopLeftRadius: '4px',
          borderBottomLeftRadius: '4px',
        },
        '&:last-child': {
          borderTopLeftRadius: '4px',
          borderBottomLeftRadius: '4px',
          borderRight: '1px solid #DBDFE1',
          marginRight: '0',
          // '&:focus':{
          //   borderRight: '1px solid #a8adb7'
          // }
        },
      },
    },
    sentCode: {
      textAlign: 'center',
      color: '#727A8E',
      fontSize: 18,
      marginTop: 24,
    },
    time: {
      color: color.blue,
    },
    wrapperCard: {
      cursor: 'pointer',
    },
    imgCard: {
      width: 155,
      height: 110,
      objectFit: 'cover',
    },
    cardEmpty: {
      width: 155,
      height: 110,
      border: '1px dashed #00358E',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textUploadCard: {
      color: '#727A8E',
      fontSize: 14,
      fontWeight: 400,
    },
    wrapperImageCard: {
      position: 'relative',
    },
    icDel: {
      left: 65,
      top: -12,
      position: 'absolute',
    },
    changeImage: {
      marginTop: 20,
      color: color.blue,
      fontWeight: 700,
      fontSize: 16,
      cursor: 'pointer',
    },
    areaUploadAvatar: {
      borderRadius: '50%',
      width: 120,
      height: 120,
      border: '1px dashed #00358E',
      cursor: 'pointer',
      textAlign: 'center',
      paddingTop: 45,
      margin: '0 auto',
    },
    avatar: {
      borderRadius: '50%',
      objectFit: 'cover',
      width: 120,
      height: 120,
    },
    datePicker: {
      marginTop: '15px',
      display: 'flex',
      width: '100%',
      height: '50px',
      background: '#fff',
    },
    date: {
      width: '14px',
      height: '14px',
      color: ' rgba(0, 53, 142, 0.8)',
      margin: 'auto 20px auto auto',
    },
    addressIcon: {
      position: 'absolute',
      width: '50px',
      height: '50px',
      zIndex: 1,
      margin: 'auto -15px auto auto',
    },
    addressContent: {
      width: '100%',
    },
    address: {
      width: '14px',
      height: '14px',
      color: ' rgba(0, 53, 142, 0.8)',
      margin: '18px -26px auto auto',
    },
    captCha: {
      display: 'flex',
      width: '460px',
      height: '200px',
      marginTop: '18px',
      background: '#f9f9f9',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '5px',
    },
  }),
);

export default useStyles;
