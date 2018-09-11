import { Action } from 'redux';
import ContainerInterface from '../Container/ContainerInterface';
import ListenerInterface from '../Listeners/ListenerInterface';
export default interface EventInterface extends Action {
    /**
     * The status of the event.
     *
     * @var {string}
     */
    readonly status: string;
    /**
     * Returns the listeners for the event.
     *
     * @return {ListenerInterface[]}
     */
    getListeners(app?: ContainerInterface): ListenerInterface[];
}
//# sourceMappingURL=EventInterface.d.ts.map