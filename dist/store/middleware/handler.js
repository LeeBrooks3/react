"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
exports.__esModule = true;
var Event_1 = require("../../app/Events/Event");
var Job_1 = require("../../app/Jobs/Job");
// tslint:disable no-console
function handle(action, store, result) {
    return __awaiter(this, void 0, void 0, function () {
        var type, value, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    type = action.type;
                    store.dispatch(new Event_1["default"](type, Event_1.status.PENDING));
                    if (!!action.shouldQueue()) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, result()];
                case 2:
                    value = _a.sent();
                    store.dispatch(new Event_1["default"](type, Event_1.status.RESOLVED));
                    return [2 /*return*/, Promise.resolve(value)];
                case 3:
                    e_1 = _a.sent();
                    store.dispatch(new Event_1["default"](type, Event_1.status.REJECTED));
                    return [2 /*return*/, Promise.reject(e_1)];
                case 4: return [2 /*return*/, result()
                        .then(function (value) {
                        store.dispatch(new Event_1["default"](type, Event_1.status.RESOLVED));
                        return value;
                    })["catch"](function (e) {
                        store.dispatch(new Event_1["default"](type, Event_1.status.REJECTED));
                        return e;
                    })];
            }
        });
    });
}
function createHandlerMiddleware(app) {
    var _this = this;
    return function (store) { return function (next) { return function (action) { return __awaiter(_this, void 0, void 0, function () {
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
                                        return [2 /*return*/, listener.handle(event_1, app, store.dispatch, store.getState)];
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
                    if (!(action instanceof Job_1["default"])) return [3 /*break*/, 7];
                    return [4 /*yield*/, handle(action, store, function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, action.handle(app, store.dispatch, store.getState)];
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
    }); }; }; };
}
exports.createHandlerMiddleware = createHandlerMiddleware;
//# sourceMappingURL=handler.js.map