import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { Fragment, useState } from 'react';

import NavBar from '../../components/navBar/NavBar';
import Home from '../home/Home';
import FormExpenses from '../formExpenses/FormExpenses';


function PrivateRoute() {

  const [operation, setOperation] = useState([]);

  return (
     <div>
      <Router>
        <NavBar/>
        <Route exact path="/"
          render= {() => <Home operation = {operation} setOperation = {setOperation}/>  } />
        <Route exact path="/form"
          render = {() =>  <FormExpenses operation = {operation} setOperation = {setOperation}/>}/>
      </Router>
    </div>
  );
};

export default PrivateRoute;
