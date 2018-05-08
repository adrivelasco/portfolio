import { combineReducers, Dispatch, Reducer } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';

export interface ApplicationState {
  routing: RouterState
};

// Creates the main reducer with the dynamically injected ones
export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  routing: routerReducer
});

export default reducers;