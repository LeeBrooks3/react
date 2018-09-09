import ListenerInterface from '../Listeners/ListenerInterface';
import EventInterface from './EventInterface';

export default class Event implements EventInterface {
    /**
     * The type of the event.
     *
     * @var {string}
     */
    public readonly type: string;

    /**
     * Sets the event type from the constructor name.
     */
    public constructor(type?: string, props?: object) {
        this.type = type || this.constructor.name;

        Object.assign(this, props);
    }

    /** @inheritDoc */
    public getListeners(): ListenerInterface[] {
        return [];
    }
}
