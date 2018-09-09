import { Dispatch } from 'redux';
import JobInterface from './JobInterface';
export default abstract class Job<StateInterface = any> implements JobInterface<StateInterface> {
    /**
     * The type of the job.
     *
     * @var {string}
     */
    readonly type: string;
    /**
     * Whether the job should be ran synchronously.
     *
     * @var {boolean}
     */
    protected readonly await: boolean;
    /**
     * Sets the job type from the constructor name.
     */
    constructor();
    /** @inheritDoc */
    abstract handle(dispatch: Dispatch, getState: () => StateInterface): Promise<void>;
    /** @inheritDoc */
    shouldAwait(): boolean;
}
