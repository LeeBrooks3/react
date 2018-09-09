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
//# sourceMappingURL=Listener.js.map