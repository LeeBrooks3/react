"use strict";
exports.__esModule = true;
var Listener = /** @class */ (function () {
    /**
     * Sets the listener type from the constructor name.
     */
    function Listener() {
        /**
         * Whether the listener should be ran asynchronously.
         */
        this.queue = false;
        this.type = this.constructor.name;
    }
    /** @inheritDoc */
    Listener.prototype.shouldQueue = function () {
        return this.queue;
    };
    return Listener;
}());
exports["default"] = Listener;
//# sourceMappingURL=Listener.js.map