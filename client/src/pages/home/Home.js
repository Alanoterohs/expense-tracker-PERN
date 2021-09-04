import Balance from '../../components/balance/Balance';
import ContainerLastExpenses  from '../../components/lastExpenses/ContainerLastExpenses';
import useStyles from './style';

import {
  Card,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';


function Home() {
  const classes = useStyles();
  return (
    <Grid className={classes.paper}>
    <Balance/>
    <ContainerLastExpenses/>
    </Grid>
  );
}

export default Home;
