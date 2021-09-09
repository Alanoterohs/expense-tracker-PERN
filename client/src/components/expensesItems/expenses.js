import useStyles from './style';
import React from 'react';
import {
 Grid,
 Card,
 Button,
 Typography,
 } from '@material-ui/core/';

function Expenses(props) {
  const classes = useStyles();

  return (
    <Grid className = {classes.container} >
      <Card variant="outlined">
        <div className = {classes.flex}>
          <Typography variant='h6'>{props.title}</Typography>
          <Typography variant='h6'>${props.amount}</Typography>
        </div>
        <div className = {classes.flex}>
            <Typography color="textSecondary">{props.category}</Typography>
            <Typography color="textSecondary">{props.date}</Typography>
        </div>
        <Button className = {classes.marginButton}
          variant="outlined"
          color="primary">Editar</Button>
        <Button className = {classes.marginButton}
          variant="outlined"
          color="secondary">Eliminar</Button>
      </Card>
    </Grid>
  );
}

export default Expenses;
