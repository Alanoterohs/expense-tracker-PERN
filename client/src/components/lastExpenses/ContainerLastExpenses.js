import {
 Grid,
 Typography,

 } from '@material-ui/core';

function ContainerLastExpenses(props){
  return (
    <Grid>
      <Typography variant="h4"
        gutterBottom> Últimos 10 registros: </Typography>
        <div>{props.children}</div>
    </Grid>
  );
}

export default ContainerLastExpenses;
