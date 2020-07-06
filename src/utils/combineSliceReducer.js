export function combineSliceReducer(slices) {
    return function combinedReducer(state, action) {
        return Object.keys(slices).reduce((acc, currKey) => ({
            ...acc,
            [currKey]: slices[currKey](acc[currKey], action),
        }), state)
    }
}