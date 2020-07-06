import React, { createContext, useReducer, useMemo } from 'react';
import { RootReducer } from './reducers/RootReducer';
import { initialState } from '../common/const';

export const storeContext = createContext();

export function StateProvider({ children }) {
    const { Provider } = storeContext;
    const [state, dispatch] = useReducer(RootReducer, initialState);
    const store = useMemo(() => [state, dispatch], [state])
    return (
        <Provider value={store}>
            {children}
        </Provider>
    )
}