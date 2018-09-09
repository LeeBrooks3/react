import { Dispatch } from 'redux';
import EventInterface from '../../../src/app/Events/EventInterface';
import Listener from '../../../src/app/Listeners/Listener';

export default class ExampleListener extends Listener {
    public handle(event: EventInterface, dispatch: Dispatch, getState: () => any): Promise<void> {
        return Promise.resolve();
    }
}
