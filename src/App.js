import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { createStore } from 'redux';

import About from './components/About';
import Definitions from './components/Definitions';
import Home from './components/Home';

import definitionsApp from './reducers';

import './App.css';

const store = createStore(definitionsApp);

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
