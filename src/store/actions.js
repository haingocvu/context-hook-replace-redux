import { COUNTER_DECREASEMENT_TYPE, COUNTER_INCREASEMENT_TYPE } from './actionType';

export function COUNTER_DECREASEMENT(payload) {
    return {
        type: COUNTER_DECREASEMENT_TYPE,
        payload,
    }
}

export function COUNTER_INCREASEMENT(payload) {
    return {
        type: COUNTER_INCREASEMENT_TYPE,
        payload,
    }
}