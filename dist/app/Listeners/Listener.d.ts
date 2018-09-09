import { Dispatch } from 'redux';
import EventInterface from '../Events/EventInterface';
import ListenerInterface from './ListenerInterface';
export default abstract class Listener<StateInterface = any> implements ListenerInterface<StateInterface> {
    /**
     * Whether the listener should be ran synchronously.
     *
     * @var {boolean}
     */
    readonly await: boolean;
    /** @inheritDoc */
    abstract handle(event: EventInterface, dispatch: Dispatch, getState: () => StateInterface): Promise<void>;
}
