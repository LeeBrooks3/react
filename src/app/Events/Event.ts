import ContainerInterface from '../Container/ContainerInterface';
import ListenerInterface from '../Listeners/ListenerInterface';
import EventInterface from './EventInterface';

export const PENDING: string = 'pending';
export const RESOLVED: string = 'resolved';
export const REJECTED: string = 'rejected';

export default class Event implements EventInterface {
    /**
     * The type of the event.
     *
     * @var {string}
     */
    public readonly type: string;

    /** @inheritDoc */
    public readonly status: string;

    /**
     * Sets the event type from the constructor name.
     */
    public constructor(type?: string, status?: string, props?: object) {
        this.type = type || this.constructor.name;
        this.status = status;

        Object.assign(this, props);
    }

    /** @inheritDoc */
    public getListeners(app?: ContainerInterface): ListenerInterface[] {
        return [];
    }
}
