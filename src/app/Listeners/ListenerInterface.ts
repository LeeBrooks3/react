import { Action, Dispatch } from 'redux';
import EventInterface from '../Events/EventInterface';
import Queueable from '../Utilities/Queueable';

export default interface ListenerInterface<T = any, S = any> extends Action, Queueable {
    /**
     * Handles the event.
     */
    handle(event: EventInterface, dispatch: Dispatch, getState: () => S): Promise<T>;
}
