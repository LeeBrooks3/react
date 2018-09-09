import * as _ from 'lodash';
import { Action, Dispatch, Store } from 'redux';
import Event from '../../app/Events/Event';

// tslint:disable no-console

export default (store: Store<any, Action>) => (next: Dispatch<Action>) => async (action: Action) => {
    if (action instanceof Event) {
        let result: any;
        const split: string[] = action.type.split('@');
        const type: string = split[0];
        const state: string = split.length > 1 ? split[1] : undefined;
        const defaultStyle: string = 'color: #868e96;';
        const props: object = {
            ...action,
        };

        _.unset(props, 'type');

        if (state) {
            let style: string;

            if (state === 'pending') {
                style = 'color: #868e96;';
            } else if (state === 'resolved') {
                style = 'color: #28a745;';
            } else if (state === 'rejected') {
                style = 'color: #dc3545;';
            }

            console.group(`${type} %c(${state})`, style);
            console.info('%cprops', defaultStyle, props);

            result = next(action);

            console.info('%cstate', defaultStyle, store.getState());
            console.groupEnd();
        } else {
            console.group(type);
            console.info('%cprops', defaultStyle, props);

            result = next(action);

            console.info('%cstate', defaultStyle, store.getState());
            console.groupEnd();
        }

        return result;
    }

    return next(action);
};
