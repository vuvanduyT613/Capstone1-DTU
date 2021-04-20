import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
//import Images from '../../../asset/image';
import { color } from '../../../asset/constant/color';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    forgotPass: {
      textAlign: 'center',
      cursor: 'pointer',
      marginTop: 20,
      fontWeight: 700,
      fontSize: 16,
      color: color.blue,
      '&:hover': {
        textDecoration: 'underline',
      },
      marginBottom: 30,
    },
    btnCreate: {
      width: '100%',
      border: '1px solid #00358E',
      borderRadius: 4,
      fontSize: 18,
      color: color.blue,
      fontWeight: 500,
      paddingTop: 14,
      paddingBottom: 14,
      cursor: 'pointer',
      background: 'unset',
      outline: 'none',
    },
    btnLogin: {
      width: '100%',
      border: 'unset',
      borderRadius: 4,
      fontSize: 18,
      color: color.white,
      fontWeight: 500,
      paddingTop: 14,
      paddingBottom: 14,
      cursor: 'pointer',
      background: color.blue,
      outline: 'none',
    },
  }),
);

export default useStyles;
