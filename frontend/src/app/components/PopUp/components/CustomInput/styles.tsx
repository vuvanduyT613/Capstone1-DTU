import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
//import Images from '../../../../asset/image';

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
      width: '90%',
      height: '43px',
      borderRadius: '5px',
      background: '#fff',
      margin: 'auto',
      display: 'flex',
      border: '0.75px solid rgba(114, 122, 142, 0.3)',
      '& fieldset': {
        border: 'none',
      },
      '& input': {
        padding: '15.5px 14px',
        fontFamily: 'Segoe UI',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '21px',
        /* identical to box height, or 150% */

        /* Title-Body text */

        color: '#333333',
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
