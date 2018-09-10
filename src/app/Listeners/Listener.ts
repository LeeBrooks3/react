import { Dispatch } from 'redux';
import EventInterface from '../Events/EventInterface';
import ListenerInterface from './ListenerInterface';

export default abstract class Listener<T = void, StateInterface = any> implements ListenerInterface<T, StateInterface> {
    /**
     * The type of the listener.
     *
     * @var {string}
     */
    public readonly type: string;

    /**
     * Whether the listener should be ran synchronously.
     *
     * @var {boolean}
     */
    protected readonly await: boolean = false;

    /**
     * Sets the listener type from the constructor name.
     */
    public constructor() {
        this.type = this.constructor.name;
    }

    /** @inheritDoc */
    public abstract async handle(event: EventInterface, dispatch: Dispatch, getState: () => StateInterface): Promise<T>; // tslint:disable-line max-line-length

    /** @inheritDoc */
    public shouldAwait(): boolean {
        return this.await;
    }
}
