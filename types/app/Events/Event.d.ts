import ContainerInterface from '../Container/ContainerInterface';
import ListenerInterface from '../Listeners/ListenerInterface';
import EventInterface from './EventInterface';
export declare const PENDING: string;
export declare const RESOLVED: string;
export declare const REJECTED: string;
export default class Event implements EventInterface {
    /** @inheritDoc */
    readonly type: string;
    /** @inheritDoc */
    readonly status: string;
    /**
     * Sets the event type from the constructor name.
     */
    constructor(type?: string, status?: string, props?: object);
    /** @inheritDoc */
    getListeners(app?: ContainerInterface): ListenerInterface[];
}
//# sourceMappingURL=Event.d.ts.map