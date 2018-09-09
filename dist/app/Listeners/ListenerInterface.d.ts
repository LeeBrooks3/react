import { Dispatch } from 'redux';
import Awaitable from '../Utilities/Awaitable';
import EventInterface from '../Events/EventInterface';
export default interface ListenerInterface<StateInterface = any> extends Awaitable {
    /**
     * Handles the event.
     *
     * @param {EventInterface} event
     * @param {Dispatch} dispatch
     * @param {} getState
     */
    handle(event: EventInterface, dispatch: Dispatch, getState: () => StateInterface): Promise<void>;
}
