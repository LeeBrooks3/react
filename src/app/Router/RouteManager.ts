import * as _ from 'lodash';
import Route from './Route';

export default class RouteManager {
    public routes: Route[];

    /**
     * @param {Route[]} routes
     */
    public constructor(routes: Route[]) {
        this.setRoutes(routes);
    }

    /**
     * Sets the routes.
     *
     * @param {object} routeMap
     * @return {void}
     */
    public setRoutes(routeMap: object): void {
        function loop(routes: Route[], object: object, prefix: string = ''): void {
            _.keys(object).forEach((key: string) => {
                const routeKey: string = `${prefix}${key}`;
                const route: Route|object = _.get(routeMap, routeKey);

                if (route instanceof Route) {
                    route.name = routeKey;

                    routes.push(route);
                } else {
                    loop(routes, route, `${routeKey}.`);
                }
            });
        }

        loop(this.routes, routeMap);
    }

    /**
     * Gets the route at the given key.
     *
     * @return {Route}
     */
    public getCurrentRoute(location: Location): Route {
        return this.routes.find((route: Route) => {
            return route.url === location.pathname;
        });
    }
}
