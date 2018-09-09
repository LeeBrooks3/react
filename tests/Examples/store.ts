import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { history } from '../../src/store/history';
import { handler, logger } from '../../src/store/middleware';
import * as reducers from './Reducers';

export const store: Store = createStore(
    connectRouter(history)(combineReducers(reducers)),
    applyMiddleware(routerMiddleware(history), logger, handler),
);
