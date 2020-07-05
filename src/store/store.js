import React, { createContext, useMemo, useCallback, useReducer } from 'react';
import { CounterReducer } from '../store/reducers/CounterReducer';
import { UnusedReducer } from '../store/reducers/UnusedReducer';
import { combineDispatch } from '../utils/combineDispatch';
import { initialState } from '../common/const';

export const StateContext = createContext();
export const DispatchContext = createContext();

export function StoreProvider({ children }) {
    const [counterState, couterDispatch] = useReducer(CounterReducer, initialState.counterState);
    const [unusedState, unusedDispatch] = useReducer(UnusedReducer, initialState.unUsedState);

    const combinedState = useMemo(
        () => ({ counterState, unusedState }),
        [counterState, unusedState]
    )
    const combinedDispatch = useCallback(
        combineDispatch(couterDispatch, unusedDispatch),
        [couterDispatch, unusedDispatch]
    )

    return (
        <StateContext.Provider value={combinedState}>
            <DispatchContext.Provider value={combinedDispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}