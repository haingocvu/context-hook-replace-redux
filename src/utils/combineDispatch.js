export function combineDispatch(...dispatch) {
    return function dispatchFn(action) {
        dispatch.forEach(dispt => dispt(action))
    }
}