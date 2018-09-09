import { routerMiddleware } from 'connected-react-router';
import { Middleware } from 'redux';
import { history } from '../history';

export const router: Middleware = routerMiddleware(history);
