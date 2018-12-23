"use strict";
exports.__esModule = true;
var _ = require("lodash");
var Route_1 = require("./Route");
var RouteManager = /** @class */ (function () {
    /**
     * Sets the routes.
     */
    function RouteManager(routes) {
        this.routes = [];
        this.setRoutes(routes);
    }
    /**
     * Gets the route at the given key.
     */
    RouteManager.prototype.getCurrentRoute = function (location) {
        return this.routes.find(function (route) {
            return route.url === location.pathname;
        });
    };
    /**
     * Gets the route at the given key.
     */
    RouteManager.prototype.getRoute = function (key) {
        return this.routes.find(function (route) {
            return route.name === key;
        });
    };
    /**
     * Transforms the routes from an object map to an array.
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
    return RouteManager;
}());
exports["default"] = RouteManager;
//# sourceMappingURL=RouteManager.js.map