import { Action, Dispatch } from 'redux';
import Awaitable from '../Utilities/Awaitable';
export default interface JobInterface<T = any, StateInterface = any> extends Action, Awaitable {
    /**
     * Does the job.
     *
     * @param {Dispatch} dispatch
     * @param {} getState
     */
    handle(dispatch: Dispatch, getState: () => StateInterface): Promise<T>;
}
//# sourceMappingURL=JobInterface.d.ts.map