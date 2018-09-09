import ExampleAsyncListener from '../../../src/app/Listeners/AsyncListener';
import ExampleListener from '../Listeners/ExampleListener';
import ListenerInterface from '../../../src/app/Listeners/ListenerInterface';
import Event from '../../../src/app/Events/Event';
import EventInterface from '../../../src/app/Events/EventInterface';

export default class ExampleEvent extends Event implements EventInterface {
    /** @inheritDoc */
    public getListeners(): ListenerInterface[] {
        return [
            new ExampleAsyncListener(),
            new ExampleListener(),
        ];
    }
}
