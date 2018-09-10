"use strict";
exports.__esModule = true;
var _ = require("lodash");
var Route_1 = require("./Route");
var RouteManager = /** @class */ (function () {
    /**
     * @param {Route[]} routes
     */
    function RouteManager(routes) {
        this.setRoutes(routes);
    }
    /**
     * Sets the routes.
     *
     * @param {object} routeMap
     * @return {void}
     */
    RouteManager.prototype.setRoutes = function (routeMap) {
        function loop(routes, object, prefix) {
            if (prefix === void 0) { prefix = ''; }
            _.keys(object).forEach(function (key) {
                var routeKey = "" + prefix + key;
                var route = _.get(routeMap, routeKey);
                if (route instanceof Route_1["default"]) {
                    route.name = routeKey;
                    routes.push(route);
                }
                else {
                    loop(routes, route, routeKey + ".");
                }
            });
        }
        loop(this.routes, routeMap);
    };
    /**
     * Gets the route at the given key.
     *
     * @return {Route}
     */
    RouteManager.prototype.getCurrentRoute = function (location) {
        return this.routes.find(function (route) {
            return route.url === location.pathname;
        });
    };
    return RouteManager;
}());
exports["default"] = RouteManager;
//# sourceMappingURL=RouteManager.js.map