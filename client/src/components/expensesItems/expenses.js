import { makeStyles } from '@material-ui/core/styles';
import {
 Card,
 CardActions,
 CardContent,
 Button,
 Typography } from '@material-ui/core/';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function Expenses() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Titulo
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="h6" component="h6">
          $1500
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">13/4</Button>
      </CardActions>
    </Card>
  );
}

export default Expenses;
