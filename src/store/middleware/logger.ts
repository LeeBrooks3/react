import * as _ from 'lodash';
import { Action, Dispatch, Store } from 'redux';
import Job from '../../app/Jobs/Job';
import Listener from '../../app/Listeners/Listener';

// tslint:disable no-console

export default (store: Store) => (next: Dispatch) => async (action: Action) => {
    if (!(action instanceof Job) && !(action instanceof Listener)) {
        let result: any;
        let style: string;
        const defaultStyle: string = 'color: #868e96;';
        const split: string[] = action.type.split('@');
        const type: string = split[0];
        const state: string = split.length > 1 ? split[1] : undefined;
        const props: object = {
            ...action,
        };

        _.unset(props, 'type');

        if (state === 'pending') {
            style = 'color: #868e96;';
        } else if (state === 'resolved') {
            style = 'color: #28a745;';
        } else if (state === 'rejected') {
            style = 'color: #dc3545;';
        }

        if (state && style) {
            console.group(`${type} %c(${state})`, style);
            console.info('%cprops', defaultStyle, props);

            result = next(action);

            console.info('%cstate', defaultStyle, store.getState());
            console.groupEnd();
        } else {
            console.group(`${type} %c(before)`, defaultStyle);
            console.info('%cprops', defaultStyle, props);
            console.info('%cstate', defaultStyle, store.getState());
            console.groupEnd();

            result = next(action);

            console.group(`${type} %c(after)`, defaultStyle);
            console.info('%cprops', defaultStyle, props);
            console.info('%cstate', defaultStyle, store.getState());
            console.groupEnd();
        }

        return result;
    }

    return next(action);
};
