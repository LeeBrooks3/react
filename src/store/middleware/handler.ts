import { Action, Dispatch, Store } from 'redux';
import Event from '../../app/Events/Event';
import EventInterface from '../../app/Events/EventInterface';
import Job from '../../app/Jobs/Job';
import Listener from '../../app/Listeners/Listener';
import ListenerInterface from '../../app/Listeners/ListenerInterface';

// tslint:disable no-console

async function handle(action: Job | Listener, store: Store, result: () => Promise<void>): Promise<void> {
    const name: string = action.constructor.name;

    store.dispatch(new Event(`${name}@pending`));

    if (action.await) {
        try {
            await result();

            store.dispatch(new Event(`${name}@resolved`));

            return Promise.resolve();
        } catch (e) {
            store.dispatch(new Event(`${name}@rejected`));

            return Promise.reject(e);
        }
    }

    return result()
        .then(() => {
            store.dispatch(new Event(`${name}@resolved`));
        })
        .catch((e: Error) => {
            store.dispatch(new Event(`${name}@rejected`));
        });
}

export default (store: Store) => (next: Dispatch) => async (action: Action | Event | Job) => {
    let result: any;

    if (action instanceof Event) {
        const event: EventInterface = action;

        result = next({
            ...event,
        });

        const listeners: ListenerInterface[] = event.getListeners();

        for (const listener of listeners) {
            await handle(listener, store, async () => listener.handle(event, store.dispatch, store.getState));
        }
    } else if (action instanceof Job) {
        result = await handle(action, store, async () => action.handle(store.dispatch, store.getState));
    } else {
        result = next(action);
    }

    return result;
};
