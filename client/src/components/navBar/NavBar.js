import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
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

// #3463F9
function NavBar() {
  return (
    <div>
     <Router>
     <AppBar position = "sticky" >
        <Toolbar>
          <div >
             <MenuItem>
               <Link to="/home" >Balance</Link>
             </MenuItem>
             <MenuItem >
               <Link to="/operations" >Operaciones</Link>
             </MenuItem>
         </div>
         <div>
             <MenuItem>
               <Link to="/login" >Cerrar Sesión</Link>
             </MenuItem>
         </div>
         </Toolbar>
     </AppBar>
     </Router>
   </div>
  );
}
// <Route path="/home" render= {() => <Balance income={income} setIncome={setIncome} />  } />
// <Route path="/operations" render = {() =>  <Form income={income} setIncome={setIncome} />}></Route>

export default NavBar;
