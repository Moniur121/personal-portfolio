import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
function App() {
  return (
    <div className="App">


      <Router>
        <Switch>
           <Route exact path="/">
           <Home></Home>
           </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
