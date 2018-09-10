import ListenerInterface from '../Listeners/ListenerInterface';
import EventInterface from './EventInterface';
export default class Event implements EventInterface {
    /**
     * The type of the event.
     *
     * @var {string}
     */
    readonly type: string;
    /**
     * Sets the event type from the constructor name.
     */
    constructor(type?: string, props?: object);
    /** @inheritDoc */
    getListeners(): ListenerInterface[];
}
//# sourceMappingURL=Event.d.ts.map