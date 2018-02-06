import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';

import './App.css';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <Route exact path="/" render={ () => <Redirect to="/home"/> }/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
);

export default App;
