import { Action } from 'redux';
import ExampleEvent from './Events/ExampleEvent';

interface StateInterface {
    count: number;
}

const initialState: StateInterface = {
    count: 0,
};

export default (state: StateInterface = initialState, action: Action): StateInterface => {
    switch (action.type) {
        case ExampleEvent.name:
            return {
                ...state,
                count: state.count + 1,
            };
        default:
            return state;
    }
};
