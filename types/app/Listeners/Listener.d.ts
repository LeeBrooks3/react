import { Dispatch } from 'redux';
import EventInterface from '../Events/EventInterface';
import ListenerInterface from './ListenerInterface';
export default abstract class Listener<StateInterface = any> implements ListenerInterface<StateInterface> {
    /**
     * The type of the listener.
     *
     * @var {string}
     */
    readonly type: string;
    /**
     * Whether the listener should be ran synchronously.
     *
     * @var {boolean}
     */
    protected readonly await: boolean;
    /**
     * Sets the listener type from the constructor name.
     */
    constructor();
    /** @inheritDoc */
    abstract handle(event: EventInterface, dispatch: Dispatch, getState: () => StateInterface): Promise<void>;
    /** @inheritDoc */
    shouldAwait(): boolean;
}
//# sourceMappingURL=Listener.d.ts.map