import { Dispatch } from 'redux';
import Job from '../../../src/app/Jobs/Job';
import ExampleEvent from '../Events/ExampleEvent';

export default class ExampleJob extends Job {
    /**
     * Dispatches an example event.
     *
     * @param {Dispatch} dispatch
     * @param {Function} getState
     * @return {void}
     */
    public async handle(dispatch: Dispatch, getState: () => any): Promise<void> {
        await dispatch(new ExampleEvent());

        return Promise.resolve();
    }
}
