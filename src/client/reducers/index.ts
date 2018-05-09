import { combineReducers, Reducer } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';

export interface IApplicationState {
  routing?: RouterState;
}

// Creates the main reducer with the dynamically injected ones
export const reducers: Reducer<IApplicationState> = combineReducers<IApplicationState>({
  routing: routerReducer
});

export default reducers;
