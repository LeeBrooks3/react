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
var _this = this;
exports.__esModule = true;
var _ = require("lodash");
var Job_1 = require("../../app/Jobs/Job");
var Listener_1 = require("../../app/Listeners/Listener");
// tslint:disable no-console
exports["default"] = (function (store) { return function (next) { return function (action) { return __awaiter(_this, void 0, void 0, function () {
    var result, style, defaultStyle, split, type, state, props;
    return __generator(this, function (_a) {
        if (!(action instanceof Job_1["default"]) && !(action instanceof Listener_1["default"])) {
            result = void 0;
            style = void 0;
            defaultStyle = 'color: #868e96;';
            split = action.type.split('@');
            type = split[0];
            state = split.length > 1 ? split[1] : undefined;
            props = __assign({}, action);
            _.unset(props, 'type');
            if (state === 'pending') {
                style = 'color: #868e96;';
            }
            else if (state === 'resolved') {
                style = 'color: #28a745;';
            }
            else if (state === 'rejected') {
                style = 'color: #dc3545;';
            }
            if (state && style) {
                console.group(type + " %c(" + state + ")", style);
                console.info('%cprops', defaultStyle, props);
                result = next(action);
                console.info('%cstate', defaultStyle, store.getState());
                console.groupEnd();
            }
            else {
                console.group(type + " %c(before)", defaultStyle);
                console.info('%cprops', defaultStyle, props);
                console.info('%cstate', defaultStyle, store.getState());
                console.groupEnd();
                result = next(action);
                console.group(type + " %c(after)", defaultStyle);
                console.info('%cprops', defaultStyle, props);
                console.info('%cstate', defaultStyle, store.getState());
                console.groupEnd();
            }
            return [2 /*return*/, result];
        }
        return [2 /*return*/, next(action)];
    });
}); }; }; });
//# sourceMappingURL=logger.js.map