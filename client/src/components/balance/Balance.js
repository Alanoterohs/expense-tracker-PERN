import useStyles from './style';

import {
  Card,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';

function Balance() {
  const classes = useStyles();
  return (
    <Grid>
      <Card>
          <CardContent>
          <Typography variant="h4" className = {classes.typography}
            gutterBottom> Balance total: </Typography>
          <Typography variant="h6" > $0.00 </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Balance;
