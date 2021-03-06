import { Dispatch } from 'redux';
import ContainerInterface from '../Container/ContainerInterface';
import Job from './Job';
export default class Redirect extends Job {
    /**
     * The url to redirect to.
     */
    protected url: string;
    /**
     * Sets the url to redirect to.
     */
    constructor(url: string);
    /**
     * Redirects to the url given on construction.
     */
    handle(app: ContainerInterface, dispatch: Dispatch, getState: <S = any>() => S): Promise<void>;
}
//# sourceMappingURL=Redirect.d.ts.map