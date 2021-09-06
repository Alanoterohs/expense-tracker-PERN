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
          <Typography variant='h6'>Plata Invertida</Typography>
          <Typography variant='h6'>+9000</Typography>
        </div>
        <div className = {classes.flex}>
            <Typography color="textSecondary">Inversiones</Typography>
            <Typography color="textSecondary">12/12</Typography>
        </div>
        <Button className = {classes.marginButton} variant="outlined" color="primary">Editar</Button>
        <Button className = {classes.marginButton} variant="outlined" color="secondary">Eliminar</Button>
      </Card>
    </Grid>
  );
}


export default Expenses;
