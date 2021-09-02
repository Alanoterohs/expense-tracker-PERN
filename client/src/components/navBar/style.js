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
}));

export default useStyles;
