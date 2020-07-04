import React, { createContext, useReducer } from 'react';
import { COUNTER_INCREASEMENT_TYPE, COUNTER_DECREASEMENT_TYPE } from '../store/actionType';

const initialState = { count: 0 };

export const store = createContext();

export function StateProvider({ children }) {
    const { Provider } = store;
    const [state, dispatch] = useReducer((state, action) => {
        const { type, payload } = action;
        switch (type) {
            case COUNTER_INCREASEMENT_TYPE:
                return {
                    ...state,
                    count: state.count + payload,
                }
            case COUNTER_DECREASEMENT_TYPE:
                return {
                    ...state,
                    count: state.count - payload,
                }
            default:
                return state;
        }
    }, initialState)
    return (
        <Provider value={[state, dispatch]}>
            {children}
        </Provider>
    )
}