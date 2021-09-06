import Balance from '../../components/balance/Balance';
import ContainerLastExpenses  from '../../components/lastExpenses/ContainerLastExpenses';
import ListExpenses from '../../components/expensesItems/ListExpenses';
import useStyles from './style';

import {
  Card,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';


function Home({ operation }) {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
    <Balance/>
    <ContainerLastExpenses>
      <ListExpenses operation = {operation}/>
    </ContainerLastExpenses>
    </Grid>
  );
}

export default Home;
