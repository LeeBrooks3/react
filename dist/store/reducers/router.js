"use strict";
exports.__esModule = true;
var connected_react_router_1 = require("connected-react-router");
var history_1 = require("../history");
function createRouterReducer(reducer) {
    return connected_react_router_1.connectRouter(history_1.history)(reducer);
}
exports.createRouterReducer = createRouterReducer;
//# sourceMappingURL=router.js.map