import { push } from 'connected-react-router';
import { Dispatch } from 'redux';
import Job from './Job';

export default class Redirect extends Job {
    protected url: string;

    /**
     * @param {string} url
     */
    public constructor(url: string) {
        super();

        this.url = url;
    }

    /**
     * Redirects to the url given on construction.
     *
     * @param {Dispatch} dispatch
     * @param {Function} getState
     */
    public async handle(dispatch: Dispatch, getState: <StateInterface = any>() => StateInterface): Promise<void> {
        await dispatch(push(this.url));

        const state: any = getState();

        if (state.router.location.pathname === this.url) {
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
    }
}
