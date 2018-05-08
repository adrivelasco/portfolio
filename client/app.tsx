// <reference path="./types/window.d.ts" />

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, Store } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';
import { IApplicationState } from './reducers/index';
import configureStore from './store/configureStore';
import history from './history';

const initialState: IApplicationState = window.APP_STATE;
const store: Store<IApplicationState> = configureStore(initialState, history);
const mountNode: HTMLElement = document.getElementById('app');

// Rendering client side
ReactDOM.hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  mountNode
);
