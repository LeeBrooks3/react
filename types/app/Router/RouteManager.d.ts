import Route from './Route';
export default class RouteManager {
    routes: Route[];
    /**
     * @param {Route[]} routes
     */
    constructor(routes: Route[]);
    /**
     * Sets the routes.
     *
     * @param {object} routeMap
     * @return {void}
     */
    setRoutes(routeMap: object): void;
    /**
     * Gets the route at the given key.
     *
     * @return {Route}
     */
    getCurrentRoute(location: Location): Route;
}
//# sourceMappingURL=RouteManager.d.ts.map