import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#3E6BFD',
  },
  left: {
    flex: 1,
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#F9F9F8',
    fontSize: 20,
    textDecoration: 'none',
    [theme.breakpoints.up('xs')]: {
      fontSize: 12,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 16,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 19,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 22,
    },
  },
}));

export default useStyles;
