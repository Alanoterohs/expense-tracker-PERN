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
        gutterBottom> {props.title} </Typography>
      <div>{props.children}</div>
    </Grid>
  );
}

export default ContainerLastExpenses;
