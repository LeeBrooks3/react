import { Action, Dispatch } from 'redux';
import EventInterface from '../Events/EventInterface';
import Awaitable from '../Utilities/Awaitable';
export default interface ListenerInterface<StateInterface = any> extends Action, Awaitable {
    /**
     * Handles the event.
     *
     * @param {EventInterface} event
     * @param {Dispatch} dispatch
     * @param {} getState
     */
    handle(event: EventInterface, dispatch: Dispatch, getState: () => StateInterface): Promise<void>;
}
