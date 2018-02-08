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
import Home from './components/Home';

import './App.css';

import definitionsApp from './reducers';

const store = createStore(definitionsApp);

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
