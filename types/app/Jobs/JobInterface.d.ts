import { Action, Dispatch } from 'redux';
import ContainerInterface from '../Container/ContainerInterface';
import Queueable from '../Utilities/Queueable';
export default interface JobInterface<T = any, S = any> extends Action, Queueable {
    /**
     * Does the job.
     */
    handle(app?: ContainerInterface, dispatch?: Dispatch, getState?: () => S): Promise<T>;
}
//# sourceMappingURL=JobInterface.d.ts.map