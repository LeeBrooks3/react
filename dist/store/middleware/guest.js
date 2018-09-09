"use strict";
exports.__esModule = true;
var connected_react_router_1 = require("connected-react-router");
exports.GUEST = 'guest';
function createGuestMiddleware(routeManager) {
    return function (store) { return function (next) { return function (action) {
        if (action.type !== 'LOCATION_CHANGE') {
            return next(action);
        }
        var state = store.getState();
        var route = routeManager.getCurrentRoute(state.router.location);
        if (route.middleware.indexOf(exports.GUEST) !== -1) {
            var user = state.auth.user;
            if (user) {
                var previousUrl = state.router.location ? state.router.location.pathname : '/';
                var url = previousUrl;
                if (previousUrl === route.url) {
                    url = '/';
                }
                store.dispatch(connected_react_router_1.push(url));
            }
        }
        return next(action);
    }; }; };
}
exports.createGuestMiddleware = createGuestMiddleware;
//# sourceMappingURL=guest.js.map