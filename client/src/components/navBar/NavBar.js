import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  Avatar } from "@material-ui/core";

import useStyles from './style';
import ButtonLink from './ButtonLink';

function NavBar() {
  const classes = useStyles();
  return (
    <Grid container component="main">
     <Router>
     <AppBar position = "sticky" className={classes.root}>
        <Toolbar>
          <div className={classes.left}>
            <ButtonLink
            redirection = 'balance'
            title = 'Balance'
            />
            <ButtonLink
            redirection = 'operations'
            title = 'Operaciones'
            />
         </div>
         <div className={classes.right}>
            <ButtonLink
            redirection = 'login'
            title = 'Cerrar Sesión'
            />
         </div>
         </Toolbar>
     </AppBar>
     </Router>
   </Grid>
  );
}

export default NavBar;
