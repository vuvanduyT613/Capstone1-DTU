import { Hidden } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { right } from 'inquirer/lib/utils/readline';
//import Images from '../../../asset/image';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapperItemImage: {
      width: '118px',
      height: '138px',
      boxShadow: '2px 2px 4px rgba(20, 20, 20, 0.04)',
      borderRadius: '5px',
      overflow: 'hidden',
    },
    wrapperItem: {
      height: '138px',
      display: 'flex',
      marginTop: '20px  ',
    },
    imageItem: {
      height: '138px',
    },
    contentItem: {
      padding: '10px',
    },
    p: {
      margin: '0px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
      /* or 150% */

      display: 'flex',
      alignItems: 'center',
    },

    name: {
      margin: '0px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
      /* or 150% */

      display: 'flex',
      alignItems: 'center',
      color: ' #FD0D0D',
    },
    specialize: {
      margin: '0px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
      /* or 150% */

      display: 'flex',
      alignItems: 'center',
      color: ' #3091bb',
    },
    count: {
      margin: '0px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '21px',
      /* or 150% */

      display: 'flex',
      alignItems: 'center',

      /* #727A8E */

      color: '#727A8E',
    },
  }),
);

export default useStyles;
