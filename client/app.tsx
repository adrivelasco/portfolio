import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';

import configureStore from './store/configureStore';
import history from './history';

const initialState = window.APP_STATE;
const store = configureStore(initialState, history);
const mountNode = document.getElementById('app');

// Rendering client side
ReactDOM.hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  mountNode
);