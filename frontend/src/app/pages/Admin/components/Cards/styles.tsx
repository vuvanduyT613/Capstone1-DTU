import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
//import Images from '../../../../asset/image';
import { color } from '../../../../asset/constant/color';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    righticon: {
      cursor: 'pointer',
    },
    wrapper: {
      width: '100%',
    },
    inputCustom: {
      width: '100%',
      marginTop: 18,
      background: color.white,

      '& fieldset': {
        border: 'none',
      },
      '& input': {
        padding: '15.5px 14px',
      },

      '& .MuiOutlinedInput-adornedEnd': {
        paddingRight: 30,
      },
      '& .MuiOutlinedInput-adornedStart': {
        paddingLeft: 30,
      },
    },
    status: {
      backgroundColor: '#ccc',
      borderRadius: '50%',
      display: 'inline-block',
      height: '10px',
      width: '10px',
    },
    online: {
      position: 'absolute',
      bottom: '18px',
      right: '57px',
      height: '10px',
      width: '10px',
      borderRadius: '50%',
      backgroundColor: '#55ce63',
    },
    offline: {
      backgroundColor: '#f62d51',
    },
    away: {
      backgroundColor: '#faa937',
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
    areaUploadAvatar2: {
      width: 250,
      height: 150,
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
      margin: 'auto',
    },
    avatar2: {
      objectFit: 'cover',
      width: 250,
      height: 150,
      margin: 'auto',
    },
    changeImage: {
      marginTop: '20px',
      textAlign: 'center',
      color: color.blue,
      fontWeight: 700,
      fontSize: 16,
      cursor: 'pointer',
    },
    changeImage2: {
      marginTop: '20px',
      textAlign: 'center',
      color: color.blue,
      fontWeight: 700,
      fontSize: 16,
      cursor: 'pointer',
    },
    err: {
      fontSize: '13px',
      color: 'red',
      marginLeft: 12,
      marginTop: 2,
    },
  }),
);

export default useStyles;
