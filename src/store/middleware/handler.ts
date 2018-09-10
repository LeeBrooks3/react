import { Action, Dispatch, Store } from 'redux';
import Event, { PENDING, REJECTED, RESOLVED } from '../../app/Events/Event';
import EventInterface from '../../app/Events/EventInterface';
import Job from '../../app/Jobs/Job';
import JobInterface from '../../app/Jobs/JobInterface';
import ListenerInterface from '../../app/Listeners/ListenerInterface';

// tslint:disable no-console

async function handle(action: JobInterface | ListenerInterface, store: Store, result: () => Promise<void>): Promise<void> { // tslint:disable-line max-line-length
    const name: string = action.constructor.name;

    store.dispatch(new Event(name, PENDING));

    if (action.shouldAwait()) {
        try {
            await result();

            store.dispatch(new Event(name, RESOLVED));

            return Promise.resolve();
        } catch (e) {
            store.dispatch(new Event(name, REJECTED));

            return Promise.reject(e);
        }
    }

    return result()
        .then(() => {
            store.dispatch(new Event(name, RESOLVED));
        })
        .catch((e: Error) => {
            store.dispatch(new Event(name, REJECTED));
        });
}

export default (store: Store<any, Action>) => (next: Dispatch<Action>) => async (action: Action) => {
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
