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
//# sourceMappingURL=Event.js.map