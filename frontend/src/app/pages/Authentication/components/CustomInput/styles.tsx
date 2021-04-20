import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Images from '../../../../asset/image';
import { color } from '../../../../asset/constant/color';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    righticon: {
      cursor: 'pointer',
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
  }),
);

export default useStyles;
