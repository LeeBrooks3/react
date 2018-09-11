import ListenerInterface from '../Listeners/ListenerInterface';
import EventInterface from './EventInterface';

const PENDING: string = 'pending';
const REJECTED: string = 'rejected';
const RESOLVED: string = 'resolved';

export const status: any = {
    PENDING,
    REJECTED,
    RESOLVED,
};

export default class Event implements EventInterface {
    /** @inheritDoc */
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
    public getListeners(): ListenerInterface[] {
        return [];
    }
}
