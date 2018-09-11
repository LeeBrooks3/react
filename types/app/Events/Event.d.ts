import ListenerInterface from '../Listeners/ListenerInterface';
import EventInterface from './EventInterface';
export declare const status: any;
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
    getListeners(): ListenerInterface[];
}
//# sourceMappingURL=Event.d.ts.map