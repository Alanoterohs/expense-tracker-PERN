import {
  Grid,
  AppBar,
  Toolbar,
} from '@material-ui/core';

import useStyles from './style';
import ButtonLink from './ButtonLink';

function NavBar() {
  const classes = useStyles();
  return (
    <Grid container component="main">
     <AppBar position = "sticky" className={classes.root}>
        <Toolbar>
          <div className={classes.left}>
            <ButtonLink
            redirection = '/'
            title = 'Balance'
            />
            <ButtonLink
            redirection = '/form'
            title = 'Operaciones'
            />
         </div>
         <div className={classes.right}>
            <ButtonLink title = 'ExitToAppIcon' redirection = 'login'/>
         </div>
        </Toolbar>
     </AppBar>
   </Grid>
  );
}

export default NavBar;
