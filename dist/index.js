var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
define("app/Cache/RepositoryInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("app/Cache/Repository", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Repository = /** @class */ (function () {
        /**
         * @param {object} config
         */
        function Repository(config) {
            this.config = config;
        }
        /** @inheritDoc */
        Repository.prototype.get = function (key) {
            return localStorage.getItem(key);
        };
        /** @inheritDoc */
        Repository.prototype.set = function (key, value) {
            localStorage.setItem(key, value);
        };
        /** @inheritDoc */
        Repository.prototype.remove = function (key) {
            localStorage.removeItem(key);
        };
        return Repository;
    }());
    exports["default"] = Repository;
});
define("app/Config/RepositoryInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("app/Config/Repository", ["require", "exports", "lodash"], function (require, exports, _) {
    "use strict";
    exports.__esModule = true;
    var Repository = /** @class */ (function () {
        /**
         * @param {object} config
         */
        function Repository(config) {
            this.config = config;
        }
        /** @inheritDoc */
        Repository.prototype.get = function (key) {
            return _.get(this.config, key);
        };
        /** @inheritDoc */
        Repository.prototype.set = function (key, value) {
            _.set(this.config, key, value);
        };
        return Repository;
    }());
    exports["default"] = Repository;
});
define("app/Events/EventInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("app/Utilities/Awaitable", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("app/Listeners/ListenerInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("app/Events/Event", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Event = /** @class */ (function () {
        /**
         * Sets the event type from the constructor name.
         */
        function Event(type, props) {
            this.type = type || this.constructor.name;
            Object.assign(this, props);
        }
        /** @inheritDoc */
        Event.prototype.getListeners = function () {
            return [];
        };
        return Event;
    }());
    exports["default"] = Event;
});
define("app/Http/Clients/AuthClient", ["require", "exports", "@leebrooks3/typescript"], function (require, exports, typescript_1) {
    "use strict";
    exports.__esModule = true;
    var AuthClient = /** @class */ (function (_super) {
        __extends(AuthClient, _super);
        /**
         * @param {Config} config
         */
        function AuthClient(config) {
            var _this = _super.call(this) || this;
            _this.clientId = config.get('oauth2.client_id');
            _this.clientSecret = config.get('oauth2.client_secret');
            _this.serverUrl = config.get('oauth2.server_url');
            _this.userEndpoint = config.get('oauth2.user_endpoint');
            _this.tokenEndpoint = config.get('oauth2.token_endpoint');
            _this.authorizeEndpoint = config.get('oauth2.authorize_endpoint');
            return _this;
        }
        return AuthClient;
    }(typescript_1.Client));
    exports["default"] = AuthClient;
});
define("app/Jobs/JobInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("app/Jobs/Job", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Job = /** @class */ (function () {
        /**
         * Sets the job type from the constructor name.
         */
        function Job() {
            /**
             * Whether the job should be ran synchronously.
             *
             * @var {boolean}
             */
            this.await = false;
            this.type = this.constructor.name;
        }
        /** @inheritDoc */
        Job.prototype.shouldAwait = function () {
            return this.await;
        };
        return Job;
    }());
    exports["default"] = Job;
});
define("app/Jobs/Redirect", ["require", "exports", "connected-react-router", "app/Jobs/Job"], function (require, exports, connected_react_router_1, Job_1) {
    "use strict";
    exports.__esModule = true;
    var Redirect = /** @class */ (function (_super) {
        __extends(Redirect, _super);
        /**
         * @param {string} url
         */
        function Redirect(url) {
            var _this = _super.call(this) || this;
            _this.await = true;
            _this.url = url;
            return _this;
        }
        /**
         * Redirects to the url given on construction.
         *
         * @param {Dispatch} dispatch
         * @param {Function} getState
         */
        Redirect.prototype.handle = function (dispatch, getState) {
            return __awaiter(this, void 0, void 0, function () {
                var state;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, dispatch(connected_react_router_1.push(this.url))];
                        case 1:
                            _a.sent();
                            state = getState();
                            if (state.router.location.pathname === this.url) {
                                return [2 /*return*/, Promise.resolve()];
                            }
                            else {
                                return [2 /*return*/, Promise.reject()];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        return Redirect;
    }(Job_1["default"]));
    exports["default"] = Redirect;
});
define("app/Listeners/Listener", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Listener = /** @class */ (function () {
        /**
         * Sets the listener type from the constructor name.
         */
        function Listener() {
            /**
             * Whether the listener should be ran synchronously.
             *
             * @var {boolean}
             */
            this.await = false;
            this.type = this.constructor.name;
        }
        /** @inheritDoc */
        Listener.prototype.shouldAwait = function () {
            return this.await;
        };
        return Listener;
    }());
    exports["default"] = Listener;
});
define("app/Router/Route", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Route = /** @class */ (function () {
        /**
         * @param {string} url
         * @param {*} component
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
});
define("app/Router/RouteManager", ["require", "exports", "lodash", "app/Router/Route"], function (require, exports, _, Route_1) {
    "use strict";
    exports.__esModule = true;
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
});
define("config/oauth2", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = {
        authorizeEndpoint: process.env.OAUTH2_AUTHORIZE_ENDPOINT,
        clientId: process.env.OAUTH2_CLIENT_ID,
        clientSecret: process.env.OAUTH2_CLIENT_SECRET,
        serverUrl: process.env.OAUTH2_SERVER_URL,
        tokenEndpoint: process.env.OAUTH2_TOKEN_ENDPOINT,
        userEndpoint: process.env.OAUTH2_USER_ENDPOINT
    };
});
define("config/index", ["require", "exports", "app/Config/Repository", "config/oauth2"], function (require, exports, Repository_1, oauth2_1) {
    "use strict";
    exports.__esModule = true;
    exports.config = new Repository_1["default"]({
        oauth2: oauth2_1["default"]
    });
});
define("store/history", ["require", "exports", "history"], function (require, exports, history_1) {
    "use strict";
    exports.__esModule = true;
    exports.history = history_1.createBrowserHistory();
});
define("store/middleware/guest", ["require", "exports", "connected-react-router"], function (require, exports, connected_react_router_2) {
    "use strict";
    exports.__esModule = true;
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
                    store.dispatch(connected_react_router_2.push(url));
                }
            }
            return next(action);
        }; }; };
    }
    exports.createGuestMiddleware = createGuestMiddleware;
});
define("store/middleware/handler", ["require", "exports", "app/Events/Event", "app/Jobs/Job"], function (require, exports, Event_1, Job_2) {
    "use strict";
    var _this = this;
    exports.__esModule = true;
    // tslint:disable no-console
    function handle(action, store, result) {
        return __awaiter(this, void 0, void 0, function () {
            var name, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = action.constructor.name;
                        store.dispatch(new Event_1["default"](name + "@pending"));
                        if (!action.shouldAwait()) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, result()];
                    case 2:
                        _a.sent();
                        store.dispatch(new Event_1["default"](name + "@resolved"));
                        return [2 /*return*/, Promise.resolve()];
                    case 3:
                        e_1 = _a.sent();
                        store.dispatch(new Event_1["default"](name + "@rejected"));
                        return [2 /*return*/, Promise.reject(e_1)];
                    case 4: return [2 /*return*/, result()
                            .then(function () {
                            store.dispatch(new Event_1["default"](name + "@resolved"));
                        })["catch"](function (e) {
                            store.dispatch(new Event_1["default"](name + "@rejected"));
                        })];
                }
            });
        });
    }
    exports["default"] = (function (store) { return function (next) { return function (action) { return __awaiter(_this, void 0, void 0, function () {
        var result, event_1, listeners, _loop_1, _i, listeners_1, listener;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(action instanceof Event_1["default"])) return [3 /*break*/, 5];
                    event_1 = action;
                    result = next(__assign({}, event_1));
                    listeners = event_1.getListeners();
                    _loop_1 = function (listener) {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handle(listener, store, function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        return [2 /*return*/, listener.handle(event_1, store.dispatch, store.getState)];
                                    }); }); })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _i = 0, listeners_1 = listeners;
                    _a.label = 1;
                case 1:
                    if (!(_i < listeners_1.length)) return [3 /*break*/, 4];
                    listener = listeners_1[_i];
                    return [5 /*yield**/, _loop_1(listener)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 8];
                case 5:
                    if (!(action instanceof Job_2["default"])) return [3 /*break*/, 7];
                    return [4 /*yield*/, handle(action, store, function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, action.handle(store.dispatch, store.getState)];
                        }); }); })];
                case 6:
                    result = _a.sent();
                    return [3 /*break*/, 8];
                case 7:
                    result = next(action);
                    _a.label = 8;
                case 8: return [2 /*return*/, result];
            }
        });
    }); }; }; });
});
define("store/middleware/user", ["require", "exports", "connected-react-router"], function (require, exports, connected_react_router_3) {
    "use strict";
    exports.__esModule = true;
    exports.USER = 'user';
    function createUserMiddleware(routeManager) {
        return function (store) { return function (next) { return function (action) {
            if (action.type !== 'LOCATION_CHANGE') {
                return next(action);
            }
            var state = store.getState();
            var route = routeManager.getCurrentRoute(state.router.location);
            if (route.middleware.indexOf(exports.USER) !== -1) {
                var user = state.auth.user;
                if (!user) {
                    var previousUrl = state.router.location ? state.router.location.pathname : '/';
                    var url = previousUrl;
                    if (previousUrl === route.url) {
                        url = '/';
                    }
                    store.dispatch(connected_react_router_3.push(url));
                }
            }
            return next(action);
        }; }; };
    }
    exports.createUserMiddleware = createUserMiddleware;
});
define("store/middleware/router", ["require", "exports", "connected-react-router", "store/history"], function (require, exports, connected_react_router_4, history_2) {
    "use strict";
    exports.__esModule = true;
    exports.router = connected_react_router_4.routerMiddleware(history_2.history);
});
define("store/middleware/logger", ["require", "exports", "lodash", "app/Events/Event"], function (require, exports, _, Event_2) {
    "use strict";
    var _this = this;
    exports.__esModule = true;
    // tslint:disable no-console
    exports["default"] = (function (store) { return function (next) { return function (action) { return __awaiter(_this, void 0, void 0, function () {
        var result, split, type, state, defaultStyle, props, style;
        return __generator(this, function (_a) {
            if (action instanceof Event_2["default"]) {
                result = void 0;
                split = action.type.split('@');
                type = split[0];
                state = split.length > 1 ? split[1] : undefined;
                defaultStyle = 'color: #868e96;';
                props = __assign({}, action);
                _.unset(props, 'type');
                if (state) {
                    style = void 0;
                    if (state === 'pending') {
                        style = 'color: #868e96;';
                    }
                    else if (state === 'resolved') {
                        style = 'color: #28a745;';
                    }
                    else if (state === 'rejected') {
                        style = 'color: #dc3545;';
                    }
                    console.group(type + " %c(" + state + ")", style);
                    console.info('%cprops', defaultStyle, props);
                    result = next(action);
                    console.info('%cstate', defaultStyle, store.getState());
                    console.groupEnd();
                }
                else {
                    console.group(type);
                    console.info('%cprops', defaultStyle, props);
                    result = next(action);
                    console.info('%cstate', defaultStyle, store.getState());
                    console.groupEnd();
                }
                return [2 /*return*/, result];
            }
            return [2 /*return*/, next(action)];
        });
    }); }; }; });
});
define("store/middleware/index", ["require", "exports", "store/middleware/guest", "store/middleware/user", "store/middleware/router", "store/middleware/handler", "store/middleware/logger"], function (require, exports, guest_1, user_1, router_1, handler_1, logger_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    exports.__esModule = true;
    __export(guest_1);
    __export(user_1);
    __export(router_1);
    exports.handler = handler_1["default"];
    exports.logger = logger_1["default"];
});
define("store/reducers/router", ["require", "exports", "connected-react-router", "store/history"], function (require, exports, connected_react_router_5, history_3) {
    "use strict";
    exports.__esModule = true;
    function createRouterReducer(reducer) {
        return connected_react_router_5.connectRouter(history_3.history)(reducer);
    }
    exports.createRouterReducer = createRouterReducer;
});
define("store/reducers/index", ["require", "exports", "store/reducers/router"], function (require, exports, router_2) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    exports.__esModule = true;
    __export(router_2);
});
//# sourceMappingURL=index.js.map