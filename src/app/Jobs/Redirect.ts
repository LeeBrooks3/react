import { push } from 'connected-react-router';
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
    public constructor(url: string) {
        super();

        this.url = url;
    }

    /**
     * Redirects to the url given on construction.
     */
    public async handle(app: ContainerInterface, dispatch: Dispatch, getState: <S = any>() => S): Promise<void> {
        await dispatch(push(this.url));

        const state: any = getState();

        if (state.router.location.pathname === this.url) {
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
    }
}
