import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import definitionsApp from './reducers';
import Definition from './models/Definition';

const store = createStore(
  definitionsApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

if (process.env.NODE_ENV === 'development') {
  store.subscribe(() => {
    console.log(store.getState());
  });

  const { addDefinition, updateDefinition } = require('./actions');
  store.dispatch(addDefinition('First definition'));
  store.dispatch(addDefinition('Second definition'));
  store.dispatch(addDefinition('Third definition'));

  store.dispatch(updateDefinition(1, new Definition(1, 'First definition', ['term1', 'term2'], ['term3'])));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
