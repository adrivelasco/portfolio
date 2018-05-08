import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose, Middleware, Store, GenericStoreEnhancer } from 'redux';
import { History } from 'history';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import rootReducer, { IApplicationState } from '../reducers';

/**
 * Create and configure Redux store
 * @param {Object} initialState
 * @param {Object} history
 *
 * @return {Object} Redux Store
 */
function configureStore(initialState: IApplicationState, history?: History): Store<IApplicationState> {
  const router: Middleware = routerMiddleware(history);

  // Create the store with three middlewares
  const middlewares: Middleware[] = [promise(), thunk, router];
  const enhancers: GenericStoreEnhancer[] = [
    applyMiddleware(...middlewares)
  ];

  const store: Store<IApplicationState> = createStore(
    rootReducer,
    initialState,
    compose(...enhancers)
  );

  return store;
}

export default configureStore;
