import { Dispatch } from 'redux';
import Job from './Job';
export default class Redirect extends Job {
    /**
     * The URL to redirect to.
     */
    protected url: string;
    /**
     * Sets the URL to redirect to.
     */
    constructor(url: string);
    /**
     * Redirects to the url given on construction.
     */
    handle(dispatch: Dispatch, getState: <StateInterface = any>() => StateInterface): Promise<void>;
}
//# sourceMappingURL=Redirect.d.ts.map