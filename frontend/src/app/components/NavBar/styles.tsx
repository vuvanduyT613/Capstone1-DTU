import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
//import Images from '../../../asset/image';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: '100%',
      height: '200px',
      display: 'flex',
    },
    wrapperNavbar: { position: 'fixed', width: '13%', height: '79vh', background: '#FDFDFD' },
  }),
);

export default useStyles;
