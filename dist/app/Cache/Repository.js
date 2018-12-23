"use strict";
exports.__esModule = true;
var Repository = /** @class */ (function () {
    function Repository() {
    }
    /** @inheritDoc */
    Repository.prototype.get = function (key) {
        var json = window.localStorage.getItem(key);
        var value = JSON.parse(json);
        return Promise.resolve(value);
    };
    /** @inheritDoc */
    Repository.prototype.set = function (key, value) {
        var json = JSON.stringify(value);
        window.localStorage.setItem(key, json);
        return Promise.resolve();
    };
    /** @inheritDoc */
    Repository.prototype.remove = function (key) {
        window.localStorage.removeItem(key);
        return Promise.resolve();
    };
    return Repository;
}());
exports["default"] = Repository;
//# sourceMappingURL=Repository.js.map