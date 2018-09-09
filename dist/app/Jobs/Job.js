"use strict";
exports.__esModule = true;
var Job = /** @class */ (function () {
    /**
     * Sets the job type from the constructor name.
     */
    function Job() {
        /**
         * Whether the job should be ran synchronously.
         *
         * @var {boolean}
         */
        this.await = false;
        this.type = this.constructor.name;
    }
    /** @inheritDoc */
    Job.prototype.shouldAwait = function () {
        return this.await;
    };
    return Job;
}());
exports["default"] = Job;
//# sourceMappingURL=Job.js.map