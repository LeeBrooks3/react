import { Dispatch } from 'redux';
import JobInterface from './JobInterface';
export default abstract class Job<T = void, StateInterface = any> implements JobInterface<T, StateInterface> {
    /**
     * The type of the job.
     *
     * @var {string}
     */
    readonly type: string;
    /**
     * Whether the job should be ran asynchronously.
     *
     * @var {boolean}
     */
    protected readonly queue: boolean;
    /**
     * Sets the job type from the constructor name.
     */
    constructor();
    /** @inheritDoc */
    abstract handle(dispatch: Dispatch, getState: () => StateInterface): Promise<T>;
    /** @inheritDoc */
    shouldQueue(): boolean;
}
//# sourceMappingURL=Job.d.ts.map