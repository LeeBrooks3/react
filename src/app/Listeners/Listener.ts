import { Dispatch } from 'redux';
import EventInterface from '../Events/EventInterface';
import ListenerInterface from './ListenerInterface';

export default abstract class Listener<StateInterface = any> implements ListenerInterface<StateInterface> {
    /**
     * Whether the listener should be ran synchronously.
     *
     * @var {boolean}
     */
    public readonly await: boolean = false;

    /** @inheritDoc */
    public abstract async handle(event: EventInterface, dispatch: Dispatch, getState: () => StateInterface): Promise<void>; // tslint:disable-line max-line-length
}
