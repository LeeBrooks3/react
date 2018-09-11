import { Dispatch } from 'redux';
import JobInterface from './JobInterface';
export default abstract class Job<T = void, S = any> implements JobInterface<T, S> {
    /**
     * The type of the job.
     */
    readonly type: string;
    /**
     * Whether the job should be ran asynchronously.
     */
    protected readonly queue: boolean;
    /**
     * Sets the job type from the constructor name.
     */
    constructor();
    /** @inheritDoc */
    abstract handle(dispatch: Dispatch, getState: () => S): Promise<T>;
    /** @inheritDoc */
    shouldQueue(): boolean;
}
//# sourceMappingURL=Job.d.ts.map