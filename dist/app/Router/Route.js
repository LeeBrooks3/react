"use strict";
exports.__esModule = true;
var Route = /** @class */ (function () {
    /**
     * @param {string} url
     * @param {ComponentClass} component
     * @param {string[]} middleware
     */
    function Route(url, component, middleware) {
        if (middleware === void 0) { middleware = []; }
        this.url = url;
        this.component = component;
        this.middleware = middleware;
    }
    return Route;
}());
exports["default"] = Route;
//# sourceMappingURL=Route.js.map