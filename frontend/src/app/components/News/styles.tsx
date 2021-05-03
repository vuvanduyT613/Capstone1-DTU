import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapperSize: {
      padding: '0px 32px 0px 32px',
    },
    wrapperNews: {
      width: '48vw',
      height: '520px',
      background: '#FDFDFD',
      borderEadius: '4px',
    },
    navNews: {
      display: 'flex',
    },
    navNewsName: {
      fontStyle: 'normal',
      fontWeight: 500,
      width: '80%',
      fontSize: '20px',
      lineHeight: '30px',
      /* identical to box height, or 150% */

      display: 'flex',
      alignItems: 'center',

      /* #00358E */

      color: '#00358E',
    },
    p: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '24px',
      /* identical to box height, or 150% */

      display: 'flex',
      alignItems: 'center',
      textAlign: 'right',
      /* Title-Body text */

      color: '#333333',
    },
    pagination: {
      width: '10%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    contentNews: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    contentItemNews: {
      width: '400px',
      height: '184px',
      margin: ' 20px 20px 0px 0px',
    },
    imageItemNews: {
      width: '400px',
      height: '100px',
      display: 'flex',
      justifyContent: 'center',
      borderRadius: '5px',
      background: '#fdfdfd',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      minHeight: '143px',
    },
    timeItemNews: {
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '16px',
      lineFeight: '24px',
      /* identical to box height, or 150% */

      display: 'flex',
      alignitems: 'center',

      /* Title-Body text */

      color: '#333333',
    },
  }),
);

export default useStyles;
