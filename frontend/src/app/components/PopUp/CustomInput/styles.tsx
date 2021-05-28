import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
//import Images from '../../../../asset/image';
import { color } from '../../../asset/constant/color';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    righticon: {
      cursor: 'pointer',
    },
    lefticon: {
      cursor: 'pointer',
      width: '14px',
      height: '14px',
      color: 'rgba(0, 53, 142, 0.8)',
      '::last-child': {
        color: 'red',
      },
    },
    inputCustom: {
      width: '100%',
      marginTop: 18,
      borderRadius: '5px',
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
  }),
);

export default useStyles;
