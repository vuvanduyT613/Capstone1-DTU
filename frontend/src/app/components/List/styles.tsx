import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { right } from 'inquirer/lib/utils/readline';
//import Images from '../../../asset/image';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapperList: {
      width: '400px',

      background: '#FDFDFD',
      borderRadius: '4px',
      top: '20px',
      right: '0px',
    },
    wrapperSize: {
      padding: '20px 30px 20px 30px',
    },
    header: {
      display: 'flex',
    },
    left: {
      width: '80%',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '20px',
      lineHeight: '30px',
      display: 'flex',
      alignItems: 'center',
      /* #00358E */
      color: '#00358E',
    },
    right: {
      width: '20%',
      display: 'flex',
      alignItems: 'center',
      fontWeight: 600,
      fontStyle: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
    },
  }),
);

export default useStyles;
