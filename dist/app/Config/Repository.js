"use strict";
exports.__esModule = true;
var _ = require("lodash");
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
//# sourceMappingURL=Repository.js.map