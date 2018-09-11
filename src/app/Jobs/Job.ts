import { Dispatch } from 'redux';
import ContainerInterface from '../Container/ContainerInterface';
import JobInterface from './JobInterface';

export default abstract class Job<T = void, S = any> implements JobInterface<T, S> {
    /**
     * The type of the job.
     */
    public readonly type: string;

    /**
     * Whether the job should be ran asynchronously.
     */
    protected readonly queue: boolean = false;

    /**
     * Sets the job type from the constructor name.
     */
    public constructor() {
        this.type = this.constructor.name;
    }

    /** @inheritDoc */
    public abstract async handle(app?: ContainerInterface, dispatch?: Dispatch, getState?: () => S): Promise<T>;

    /** @inheritDoc */
    public shouldQueue(): boolean {
        return this.queue;
    }
}
