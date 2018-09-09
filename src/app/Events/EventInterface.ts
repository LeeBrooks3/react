import { Action } from 'redux';
import ListenerInterface from '../Listeners/ListenerInterface';

export default interface EventInterface extends Action {
    /**
     * Returns the listeners for the event.
     *
     * @return {ListenerInterface[]}
     */
    getListeners(): ListenerInterface[];
}
