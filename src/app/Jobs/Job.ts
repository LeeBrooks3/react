import { Dispatch } from 'redux';
import JobInterface from './JobInterface';

export default abstract class Job<StateInterface = any> implements JobInterface<StateInterface> {
    /**
     * The type of the job.
     *
     * @var {string}
     */
    public readonly type: string;

    /**
     * Whether the job should be ran synchronously.
     *
     * @var {boolean}
     */
    protected readonly await: boolean = false;

    /**
     * Sets the job type from the constructor name.
     */
    public constructor() {
        this.type = this.constructor.name;
    }

    /** @inheritDoc */
    public abstract async handle(dispatch: Dispatch, getState: () => StateInterface): Promise<void>;

    /** @inheritDoc */
    public shouldAwait(): boolean {
        return this.await;
    }
}
