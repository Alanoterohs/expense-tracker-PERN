import useStyles from './style';

import {
  Grid,
  Container,
 } from '@material-ui/core';

import Expenses from './expenses';

function ListExpenses({ operation, letter }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={1} style={{ backgroundColor: '#ffffff', }}>
      {operation.map((items, index) => (
          <Expenses
          key={index}
          letter = {letter}
          title = {items.title}
          description = {items.description}
          amount = {items.amount}
          date = {items.date}
          category = {items.category}
          />
      ))}
    </Grid>
  );
}

export default ListExpenses;
