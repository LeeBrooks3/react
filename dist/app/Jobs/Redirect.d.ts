import { Dispatch } from 'redux';
import Job from './Job';
export default class Redirect extends Job {
    protected url: string;
    /**
     * @param {string} url
     */
    constructor(url: string);
    /**
     * Redirects to the url given on construction.
     *
     * @param {Dispatch} dispatch
     * @param {Function} getState
     */
    handle(dispatch: Dispatch, getState: <StateInterface = any>() => StateInterface): Promise<void>;
}
