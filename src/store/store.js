import React, { createContext, useReducer, useMemo } from 'react';
import { initialState } from '../common/const';
import { CounterReducer } from '../store/reducers/CounterReducer';
import { UnusedReducer } from '../store/reducers/UnusedReducer';
import useCombinedReducer from 'use-combined-reducers';

export const storeContext = createContext();
storeContext.displayName = 'Store';

export function StateProvider({ children }) {
    const { Provider } = storeContext;
    const [state, dispatch] = useCombinedReducer({
        counterState: useReducer(CounterReducer, initialState.counterState),
        unusedState: useReducer(UnusedReducer, initialState.unusedState),
    })

    // always remember use useMemo with state and dispatch to prevent unnecessary render
    const store = useMemo(() => [state, dispatch], [state, dispatch]);

    return (
        <Provider value={store}>
            {children}
        </Provider>
    )
}