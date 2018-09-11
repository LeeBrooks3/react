import * as _ from 'lodash';
import Route from './Route';

export default class RouteManager {
    public routes: Route[];

    /**
     * Sets the routes.
     */
    public constructor(routes: Route[]) {
        this.setRoutes(routes);
    }

    /**
     * Gets the route at the given key.
     */
    public getCurrentRoute(location: Location): Route {
        return this.routes.find((route: Route) => {
            return route.url === location.pathname;
        });
    }

    /**
     * Transforms the routes from an object map to an array.
     */
    private setRoutes(routeMap: object): void {
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
}
