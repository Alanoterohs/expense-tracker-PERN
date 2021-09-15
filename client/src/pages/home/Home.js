import { useEffect } from 'react';

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

function Home({ operation, setOperation }) {
  const classes = useStyles();

  // export const getIncomes = async (setIncome) => {
  //   try {
  //     const response = await fetch('http://localhost:5000/registers/getregisters');
  //     // console.log(response);
  //     const data = await response.json();
  //     setIncome(data);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  const getLastOperations = async () => {
    try {
      const res = await fetch('http://localhost:5000/operations/lastOperations', {
        method: 'GET',
      });
      const { getOperations } = await res.json();
      console.log(getOperations);
      setOperation(getOperations);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getLastOperations();
  }, []);

  return (
    <Grid className={classes.root}>
    <Balance/>
    <ContainerLastExpenses title= 'Últimos 10 registros:'>
      <ListExpenses operation = {operation} letter = 'balance'/>
    </ContainerLastExpenses>
    </Grid>
  );
}

export default Home;
