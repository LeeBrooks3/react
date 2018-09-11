"use strict";
exports.__esModule = true;
var _ = require("lodash");
var Container = /** @class */ (function () {
    /**
     * @param {object} map
     */
    function Container(map) {
        this.map = map;
    }
    /** @inheritDoc */
    Container.prototype.get = function (key) {
        return _.get(this.map, key);
    };
    /** @inheritDoc */
    Container.prototype.set = function (key, value) {
        _.set(this.map, key, value);
    };
    return Container;
}());
exports["default"] = Container;
//# sourceMappingURL=Container.js.map