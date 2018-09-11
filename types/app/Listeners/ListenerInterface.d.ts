import { Action, Dispatch } from 'redux';
import EventInterface from '../Events/EventInterface';
import Queueable from '../Utilities/Queueable';
export default interface ListenerInterface<T = any, StateInterface = any> extends Action, Queueable {
    /**
     * Handles the event.
     *
     * @param {EventInterface} event
     * @param {Dispatch} dispatch
     * @param {function} getState
     */
    handle(event: EventInterface, dispatch: Dispatch, getState: () => StateInterface): Promise<T>;
}
//# sourceMappingURL=ListenerInterface.d.ts.map