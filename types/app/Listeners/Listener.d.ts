import { Dispatch } from 'redux';
import EventInterface from '../Events/EventInterface';
import ListenerInterface from './ListenerInterface';
export default abstract class Listener<T = void, StateInterface = any> implements ListenerInterface<T, StateInterface> {
    /**
     * The type of the listener.
     *
     * @var {string}
     */
    readonly type: string;
    /**
     * Whether the listener should be ran asynchronously.
     *
     * @var {boolean}
     */
    protected readonly queue: boolean;
    /**
     * Sets the listener type from the constructor name.
     */
    constructor();
    /** @inheritDoc */
    abstract handle(event: EventInterface, dispatch: Dispatch, getState: () => StateInterface): Promise<T>;
    /** @inheritDoc */
    shouldQueue(): boolean;
}
//# sourceMappingURL=Listener.d.ts.map