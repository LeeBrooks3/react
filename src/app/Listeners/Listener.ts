import { Dispatch } from 'redux';
import ContainerInterface from '../Container/ContainerInterface';
import EventInterface from '../Events/EventInterface';
import ListenerInterface from './ListenerInterface';

export default abstract class Listener<T = void, S = any> implements ListenerInterface<T, S> {
    /**
     * The type of the listener.
     */
    public readonly type: string;

    /**
     * Whether the listener should be ran asynchronously.
     */
    protected readonly queue: boolean = false;

    /**
     * Sets the listener type from the constructor name.
     */
    public constructor() {
        this.type = this.constructor.name;
    }

    /** @inheritDoc */
    public abstract async handle(event: EventInterface, app?: ContainerInterface, dispatch?: Dispatch, getState?: () => S): Promise<T>; // tslint:disable-line max-line-length

    /** @inheritDoc */
    public shouldQueue(): boolean {
        return this.queue;
    }
}
