import { Action, Dispatch } from 'redux';
import Queueable from '../Utilities/Queueable';
export default interface JobInterface<T = any, StateInterface = any> extends Action, Queueable {
    /**
     * Does the job.
     *
     * @param {Dispatch} dispatch
     * @param {} getState
     */
    handle(dispatch: Dispatch, getState: () => StateInterface): Promise<T>;
}
//# sourceMappingURL=JobInterface.d.ts.map