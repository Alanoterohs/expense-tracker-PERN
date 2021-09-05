import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  typography: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 24,
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
