import { Dispatch } from 'redux';
import EventInterface from '../../../src/app/Events/EventInterface';
import Listener from '../../../src/app/Listeners/Listener';

export default class ExampleAsyncListener extends Listener {
    public readonly await: boolean = true;

    public async handle(event: EventInterface, dispatch: Dispatch, getState: () => any): Promise<any> {
        return new Promise((resolve: () => void) => setTimeout(() => {
            resolve();
        }, 5000));
    }
}
