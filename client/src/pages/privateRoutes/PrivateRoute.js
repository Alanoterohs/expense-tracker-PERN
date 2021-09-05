import NavBar from '../../components/navBar/NavBar';
import Home from '../home/Home';
import FormExpenses from '../formExpenses/FormExpenses';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

function PrivateRoute() {

  return (
     <div>
      <Router>
        <NavBar/>
        <Route path="/balance" render= {() => <Home/>  } />
        <Route path="/form" render = {() =>  <FormExpenses/>}></Route>
      </Router>
    </div>
  );
};

export default PrivateRoute;
