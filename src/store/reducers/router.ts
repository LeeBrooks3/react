import { connectRouter } from 'connected-react-router';
import { Reducer } from 'redux';
import { history } from '../history';

export function createRouterReducer(reducer: Reducer): Reducer {
    return connectRouter(history)(reducer);
}
