import {
  Grid,
 } from '@material-ui/core';

import Expenses from './expenses';

function ListExpenses({ operation, title, description, amount }) {
  return (
    <Grid maxWidth="lg" style={{ backgroundColor: '#ffffff', }}>
      {operation.map((items, index) => (
        <div key={index}>
          <Expenses
          title = {items.title}
          description = {items.description}
          amount = {items.amount}
          />
        </div>
      ))}
    </Grid>
  );
}

export default ListExpenses;
