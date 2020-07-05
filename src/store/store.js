import React, { createContext, useReducer } from 'react';
import { RootReducer } from './reducers/RootReducer';
import { initialState } from '../common/const';

export const store = createContext();

export function StateProvider({ children }) {
    const { Provider } = store;
    const [state, dispatch] = useReducer(RootReducer, initialState)
    return (
        <Provider value={[state, dispatch]}>
            {children}
        </Provider>
    )
}