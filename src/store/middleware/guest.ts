import { push } from 'connected-react-router';
import { Action, Dispatch, Middleware, Store } from 'redux';
import Route from '../../app/Router/Route';
import RouteManager from '../../app/Router/RouteManager';

export const GUEST: string = 'guest';

export function createGuestMiddleware(routeManager: RouteManager): Middleware {
    return (store: Store) => (next: Dispatch) => (action: Action) => {
        if (action.type !== 'LOCATION_CHANGE') {
            return next(action);
        }

        const state: any = store.getState();
        const route: Route = routeManager.getCurrentRoute(state.router.location);

        if (route.middleware.indexOf(GUEST) !== -1) {
            const user: object = state.auth.user;

            if (user) {
                const previousUrl: string = state.router.location ? state.router.location.pathname : '/';
                let url: string = previousUrl;

                if (previousUrl === route.url) {
                    url = '/';
                }

                store.dispatch(push(url));
            }
        }

        return next(action);
    };
}
