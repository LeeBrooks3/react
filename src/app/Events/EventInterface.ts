import { Action } from 'redux';
import ContainerInterface from '../Container/ContainerInterface';
import ListenerInterface from '../Listeners/ListenerInterface';

export default interface EventInterface extends Action {
    /**
     * The status of the event.
     */
    readonly status: string;

    /**
     * Returns the listeners for the event.
     */
    getListeners(app?: ContainerInterface): ListenerInterface[];
}
