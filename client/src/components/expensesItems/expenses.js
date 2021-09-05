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


function Expenses(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.description}
        </Typography>
        <Typography variant="h6" component="h6">
          {props.amount}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">boton</Button>
      </CardActions>
    </Card>
  );
}

export default Expenses;
