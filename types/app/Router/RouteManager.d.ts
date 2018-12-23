import Route from './Route';
export default class RouteManager {
    routes: Route[];
    /**
     * Sets the routes.
     */
    constructor(routes: object);
    /**
     * Gets the route at the given key.
     */
    getCurrentRoute(location: Location): Route;
    /**
     * Gets the route at the given key.
     */
    getRoute(key: string): Route;
    /**
     * Transforms the routes from an object map to an array.
     */
    private setRoutes;
}
//# sourceMappingURL=RouteManager.d.ts.map