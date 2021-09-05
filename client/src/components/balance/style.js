import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  typography: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]: {
      fontSize: 16,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 25,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 30,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 35,
    },
  },
}));
export default useStyles;
