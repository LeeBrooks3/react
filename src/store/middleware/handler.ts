import { Action, Dispatch, Middleware, Store } from 'redux';
import ContainerInterface from '../../app/Container/ContainerInterface';
import Event, { PENDING, REJECTED, RESOLVED } from '../../app/Events/Event';
import EventInterface from '../../app/Events/EventInterface';
import Job from '../../app/Jobs/Job';
import JobInterface from '../../app/Jobs/JobInterface';
import ListenerInterface from '../../app/Listeners/ListenerInterface';

// tslint:disable no-console

async function handle(action: JobInterface | ListenerInterface, store: Store, result: () => Promise<void>): Promise<void> { // tslint:disable-line max-line-length
    const type: string = action.type;

    store.dispatch(new Event(type, PENDING));

    if (!action.shouldQueue()) {
        try {
            const value: any = await result();

            store.dispatch(new Event(type, RESOLVED));

            return Promise.resolve(value);
        } catch (e) {
            store.dispatch(new Event(type, REJECTED));

            return Promise.reject(e);
        }
    }

    return result()
        .then((value: any) => {
            store.dispatch(new Event(type, RESOLVED));

            return value;
        })
        .catch((e: Error) => {
            store.dispatch(new Event(type, REJECTED));

            return e;
        });
}

export function createHandlerMiddleware(app: ContainerInterface): Middleware {
    return (store: Store<any, Action>) => (next: Dispatch<Action>) => async (action: Action) => {
        let result: any;

        if (action instanceof Event) {
            const event: EventInterface = action;

            result = next({
                ...event,
            });

            const listeners: ListenerInterface[] = event.getListeners();

            for (const listener of listeners) {
                await handle(listener, store, async () => listener.handle(event, app, store.dispatch, store.getState));
            }
        } else if (action instanceof Job) {
            result = await handle(action, store, async () => action.handle(app, store.dispatch, store.getState));
        } else {
            result = next(action);
        }

        return result;
    };
}
