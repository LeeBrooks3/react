import { Dispatch } from 'redux';
import JobInterface from './JobInterface';
export default abstract class Job<StateInterface = any> implements JobInterface<StateInterface> {
    /**
     * Whether the job should be ran synchronously.
     *
     * @var {boolean}
     */
    readonly await: boolean;
    /** @inheritDoc */
    abstract handle(dispatch: Dispatch, getState: () => StateInterface): Promise<void>;
}
