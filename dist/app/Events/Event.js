"use strict";
exports.__esModule = true;
var PENDING = 'pending';
var REJECTED = 'rejected';
var RESOLVED = 'resolved';
exports.status = {
    PENDING: PENDING,
    REJECTED: REJECTED,
    RESOLVED: RESOLVED
};
var Event = /** @class */ (function () {
    /**
     * Sets the event type from the constructor name.
     */
    function Event(type, status, props) {
        this.type = type || this.constructor.name;
        this.status = status;
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