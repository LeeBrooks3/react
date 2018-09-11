"use strict";
exports.__esModule = true;
exports.PENDING = 'pending';
exports.RESOLVED = 'resolved';
exports.REJECTED = 'rejected';
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
    Event.prototype.getListeners = function (app) {
        return [];
    };
    return Event;
}());
exports["default"] = Event;
//# sourceMappingURL=Event.js.map