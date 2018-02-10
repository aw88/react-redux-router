import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import definitionsApp from './reducers';

const store = createStore(definitionsApp);

if (process.env.NODE_ENV !== 'production') {
  store.subscribe(() => {
    console.log(store.getState());
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
