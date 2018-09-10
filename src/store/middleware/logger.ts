import * as _ from 'lodash';
import { Action, Dispatch, Store } from 'redux';
import Event, { PENDING, REJECTED, RESOLVED } from '../../app/Events/Event';

// tslint:disable no-console

export default (store: Store<any, Action>) => (next: Dispatch<Action>) => async (action: Action) => {
    if (action instanceof Event) {
        let result: any;
        const defaultStyle: string = 'color: #868e96;';
        const props: object = {
            ...action,
        };

        _.unset(props, 'type');
        _.unset(props, 'status');

        if (action.status) {
            let style: string;

            if (action.status === PENDING) {
                style = 'color: #868e96;';
            } else if (action.status === RESOLVED) {
                style = 'color: #28a745;';
            } else if (action.status === REJECTED) {
                style = 'color: #dc3545;';
            }

            console.group(`${action.type} %c(${action.status})`, style);
            console.info('%cprops', defaultStyle, props);

            result = next(action);

            console.info('%cstate', defaultStyle, store.getState());
            console.groupEnd();
        } else {
            console.group(action.type);
            console.info('%cprops', defaultStyle, props);

            result = next(action);

            console.info('%cstate', defaultStyle, store.getState());
            console.groupEnd();
        }

        return result;
    }

    return next(action);
};
