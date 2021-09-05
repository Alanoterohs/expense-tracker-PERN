import useStyles from './style';

import {
 Grid,
 Container,
 Typography,
 } from '@material-ui/core';

function ContainerLastExpenses(props) {
  const classes = useStyles();
  return (
    <Grid>
      <Typography variant="h4" className={classes.typography}
        gutterBottom> Últimos 10 registros: </Typography>
      <div>{props.children}</div>
    </Grid>
  );
}

export default ContainerLastExpenses;
