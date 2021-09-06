import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    //maxWidth: '100ch',
    // backgroundColor: 'gray',
    flexGrow: 1,
  },
  marginButton: {
    margin: '0.1rem',
  },
  container: {
    width: '100%',
    textAlign: 'left',
    flexGrow: 1,
    margin: '0.4rem',
    overflow: 'hidden',
    alignSelf: 'center',
    border: '0.1rem solid #8AA5FD',
    borderRadius: '7px',
  },
  flex: {
    textAlign: 'left',
    fontSize: '1rem',
    margin: '0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    border: 1,
  },
}));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     // padding: theme.spacing(2),
//     // margin: 'auto',
//     // maxWidth: 500,
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
//   sizeCard: {
//     height: 150,
//   },
// }));

export default useStyles;
