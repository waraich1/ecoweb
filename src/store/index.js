import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import data from './reducers/result';
import { root } from '../store/reducers/saga';
export const rootReducer = combineReducers({
  fetchData: data
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(root);
