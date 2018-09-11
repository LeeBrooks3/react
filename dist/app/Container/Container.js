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
    Container.prototype.make = function (key) {
        var factory = _.get(this.map, key);
        return factory(this);
    };
    return Container;
}());
exports["default"] = Container;
//# sourceMappingURL=Container.js.map