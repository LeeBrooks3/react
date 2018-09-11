import { Dispatch } from 'redux';
import EventInterface from '../Events/EventInterface';
import ListenerInterface from './ListenerInterface';
export default abstract class Listener<T = void, S = any> implements ListenerInterface<T, S> {
    /**
     * The type of the listener.
     */
    readonly type: string;
    /**
     * Whether the listener should be ran asynchronously.
     */
    protected readonly queue: boolean;
    /**
     * Sets the listener type from the constructor name.
     */
    constructor();
    /** @inheritDoc */
    abstract handle(event: EventInterface, dispatch: Dispatch, getState: () => S): Promise<T>;
    /** @inheritDoc */
    shouldQueue(): boolean;
}
//# sourceMappingURL=Listener.d.ts.map