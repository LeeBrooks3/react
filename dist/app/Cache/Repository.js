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
//# sourceMappingURL=Repository.js.map