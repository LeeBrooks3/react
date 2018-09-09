import * as _ from 'lodash';
import { Action, Dispatch, Store } from 'redux';
import Event from '../../app/Events/Event';
import Job from '../../app/Jobs/Job';
import Listener from '../../app/Listeners/Listener';

// tslint:disable no-console

export default (store: Store<any, Action>) => (next: Dispatch<Action>) => async (action: Action) => {
    if (!(action instanceof Job) && !(action instanceof Listener)) {
        let result: any;
        let style: string;
        let split: string[];
        let type: string;
        let state: string;
        const defaultStyle: string = 'color: #868e96;';
        const props: object = {
            ...action,
        };

        if (action instanceof Event) {
            split = action.type.split('@');
            type = split[0];
            state = split.length > 1 ? split[1] : undefined;
        } else {
            type = action.type;
        }

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
