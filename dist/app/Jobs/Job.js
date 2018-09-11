"use strict";
exports.__esModule = true;
var Job = /** @class */ (function () {
    /**
     * Sets the job type from the constructor name.
     */
    function Job() {
        /**
         * Whether the job should be ran asynchronously.
         *
         * @var {boolean}
         */
        this.queue = false;
        this.type = this.constructor.name;
    }
    /** @inheritDoc */
    Job.prototype.shouldQueue = function () {
        return this.queue;
    };
    return Job;
}());
exports["default"] = Job;
//# sourceMappingURL=Job.js.map