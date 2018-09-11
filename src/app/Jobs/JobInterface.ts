import { Action, Dispatch } from 'redux';
import Queueable from '../Utilities/Queueable';

export default interface JobInterface<T = any, S = any> extends Action, Queueable {
    /**
     * Does the job.
     */
    handle(dispatch: Dispatch, getState: () => S): Promise<T>;
}
