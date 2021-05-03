import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
//import Images from '../../../asset/image';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: '100%',
      height: '200px',
      display: 'flex',
      background: ' #00358E',
      border: '1px solid #000000',
      boxSizing: 'border-box',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    wrapperNavbar: {
      position: 'absolute',
      width: '15%',
      height: '900px',
      background: '#FDFDFD',
    },
  }),
);

export default useStyles;
