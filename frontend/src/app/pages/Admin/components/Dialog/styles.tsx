import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
//import Images from '../../../../asset/image';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 2,
    },
    formWrapper: {
      display: 'flex',
    },
    dropzoneArea: {
      marginTop: '15px',
    },
    grid1: {
      display: 'flex',
      margin: '15px 0px 0px 0px',
      justifyContent: 'center',
      width: '100%',
    },
    grid2: {
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'center',
    },
    grid3: {
      margin: '20px 0px 0px 8px',
      width: '81%',
    },
    grid4: {
      margin: '20px 0px 0px 45px',
      width: '81%',
    },
    grid5: {
      paddingTop: '15px',
      margin: '0px 0px 12px 0px',
      justifyContent: 'center',
      width: '89%',
      height: '265px',
    },

    grid6: {
      paddingTop: '15px',
      margin: '0px 0px 10px 0px',
      justifyContent: 'center',
      width: '89%',
      height: '337px',
    },
    filled1: {
      width: '92%',
      height: '75px',
    },

    text: {
      textAlign: 'center',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: '22px',
    },
    button1: {
      marginLeft: '20px',
      '&:hover': {
        borderRadius: '100%',
      },
    },
    button2: {
      width: '150px',
      height: '50px',
    },
    previewChip: {
      minWidth: 160,
      maxWidth: 210,
    },
    container: {
      display: 'flex',
    },
    wrapper: {
      width: '50%',
    },
    button3: {
      width: '20px',
      height: '20px',
    },
    image: {
      width: '50%',
      height: '50%',
      margin: '0px 20px 20px 0px',
      borderRadius: '10px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      cursor: 'poiter',
      transition: '0.3s',
      border: '1px solid #7668cb',
      //sboxShadow: "0 8px 30px -16px rgba(0,0,0,0.4)",
    },
    image2: {
      maxWidth: '100%',
      height: '300px',
      margin: '0px 16px 0px 16px',
      borderRadius: '0px 0px 5px 5px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      cursor: 'poiter',
      transition: '0.3s',
      border: '1px solid #7668cb',
      //sboxShadow: "0 8px 30px -16px rgba(0,0,0,0.4)",
    },
    image3: {
      maxWidth: '100%',
      height: '180px',
      margin: '0px 20px 0px 20px',
      borderRadius: '0px 0px 5px 5px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: '#31303e',
      padding: '5px 0px 5px 0px',
      cursor: 'poiter',
      transition: '0.3s',
      border: '1px solid #7668cb',
      //sboxShadow: "0 8px 30px -16px rgba(0,0,0,0.4)",
    },
    image4: {
      maxWidth: '100%',
      height: '260px',
      margin: '0px 16px 0px 16px',
      borderRadius: '0px 0px 5px 5px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: '#31303e',
      cursor: 'poiter',
      transition: '0.3s',
      border: '1px solid #7668cb',
    },
    activeTitle: {
      cursor: 'pointer',
      height: '50%',
      padding: '10px 0px 10px 0px',
      backgroundColor: 'rgb(218, 218, 218)',
      borderTop: '1px solid #7668cb',
      borderRadius: '0px 0px 10px 10px',
      display: 'flex',
    },
    activeTitle2: {
      cursor: 'pointer',
      height: '13%',
      margin: '0px 16px 0px 16px',
      backgroundColor: '#fff',
      borderRadius: '5px 5px 0px 0px',
    },
    activeTitle3: {
      cursor: 'pointer',
      height: '13%',
      margin: '0px 20px 0px 20px',
      backgroundColor: 'rgb(232, 232, 232)',
      borderRadius: '5px 5px 0px 0px',
    },
    activeTitle4: {
      cursor: 'pointer',
      height: '13%',
      margin: '0px 16px 0px 16px',
      backgroundColor: 'rgb(232, 232, 232)',
      borderRadius: '5px 5px 0px 0px',
    },
    imageChildren: {
      minWidth: '20%',
      maxWidth: '100%',
      height: '300px',
      //boxShadow: "0px 0px 4px #fff",
      justifyContent: 'center',
      margin: 'auto',
    },
    imageChildren3: {
      cursor: 'pointer',
      maxWidth: '100%',
      minWidth: '10%',
      height: '100%',
      margin: 'auto',
    },
    imageChildren4: {
      minWidth: '20%',
      maxWidth: '100%',
      height: '240px',
      boxShadow: '0px 0px 4px #fff',
      borderRadius: '5px',
      justifyContent: 'center',
      margin: 'auto',
      cursor: 'pointer',
    },
  }),
);

export default useStyles;
