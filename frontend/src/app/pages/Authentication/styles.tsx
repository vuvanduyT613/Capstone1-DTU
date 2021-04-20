import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Images from '../../asset/image';
import { color } from '../../asset/constant/color';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapperAuthen: {
      height: '100%',
      backgroundImage: `url("${Images.background.default}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    logo: {
      borderRadius: '50%',
    },
    welcome: {
      order: 1,
      height: '100vh',
      paddingTop: 77,
      background: 'rgba(0, 53, 142, 0.8)',
      // opacity: 0.8,
      [theme.breakpoints.down('xs')]: {
        flexBasis: 'unset',
        order: 0,
        height: 'unset',
      },
    },
    innerContent: {
      width: 460,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    formLogin: {
      order: 0,
      height: '100vh',
      [theme.breakpoints.down('xs')]: {
        flexBasis: 'unset',
        order: 1,
        height: 'unset',
      },
    },
    title: {
      fontFamily: 'Abhaya Libre SemiBold',
      fontWeight: 600,
      fontSize: 28,
      color: color.black,
      marginTop: 10,
      marginBottom: 22,
    },
    welcomeTitle: {
      fontWeight: 400,
      fontSize: 32,
      color: color.white,
      textAlign: 'end',
      paddingRight: 50,
    },
    welcomeDescription: {
      marginTop: 14,
      fontWeight: 400,
      fontSize: 16,
      color: color.white,
      textAlign: 'end',
      paddingRight: 35,
    },
  }),
);

export default useStyles;
