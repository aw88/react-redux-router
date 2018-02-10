import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import About from './components/About';
import Definitions from './components/Definitions';
import Home from './components/Home';

import './App.css';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/definitions">Definitions</Link></li>
      </ul>

      <Route exact path="/" render={ () => <Redirect to="/home"/> }/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/definitions" component={Definitions}/>
    </div>
  </Router>
);

export default App;
