import { Action, Dispatch, Store } from 'redux';
import Event from '../../app/Events/Event';
import Job from '../../app/Jobs/Job';
declare const _default: (store: Store<any, Action<any>>) => (next: Dispatch<Action<any>>) => (action: Action<any> | Event | Job<any>) => Promise<any>;
export default _default;
