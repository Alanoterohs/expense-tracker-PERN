import useStyles from './style';

import {
  Grid,
  Container,
 } from '@material-ui/core';

import Expenses from './expenses';

function ListExpenses({ operation }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={1} style={{ backgroundColor: '#ffffff', }}>
      {operation.map((items, index) => (
          <Expenses
          key={index}
          title = {items.title}
          description = {items.description}
          amount = {items.amount}
          date = {items.date}
          />
      ))}
    </Grid>
  );
}

export default ListExpenses;
