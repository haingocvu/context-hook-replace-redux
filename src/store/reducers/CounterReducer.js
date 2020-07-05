import { COUNTER_DECREASEMENT_TYPE, COUNTER_INCREASEMENT_TYPE } from './../actionType';
import { initialState } from '../../common/const';

export const CounterReducer = (state = initialState.counterState, action) => {
    const { type, payload } = action;
    switch (type) {
        case COUNTER_DECREASEMENT_TYPE:
            return {
                ...state, 
                count: state.count - payload,
            }
        case COUNTER_INCREASEMENT_TYPE:
            return {
                ...state,
                count: state.count + payload,
            }
        default:
            return state;
    }
}