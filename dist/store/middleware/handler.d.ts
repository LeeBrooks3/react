import { Action, Dispatch, Store } from 'redux';
import Event from '../../app/Events/Event';
import Job from '../../app/Jobs/Job';
declare const _default: (store: Store<any, import("../../../../../../../Users/leebrooks/Projects/react/node_modules/redux").AnyAction>) => (next: Dispatch<import("../../../../../../../Users/leebrooks/Projects/react/node_modules/redux").AnyAction>) => (action: Action<any> | Event | Job<any>) => Promise<any>;
export default _default;
