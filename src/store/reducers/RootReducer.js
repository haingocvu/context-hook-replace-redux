import { CounterReducer } from './CounterReducer';
import { UnusedReducer } from './UnusedReducer';
import { combineSliceReducer } from '../../utils/combineSliceReducer';

export const RootReducer = combineSliceReducer({
    counterState: CounterReducer,
    unusedState: UnusedReducer,
});