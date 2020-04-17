import { actionTypes } from '../actions/actionTypes';

export function isInformationTyped( state = false, action ) {
    switch(action.type) {
        case actionTypes.IS_INFORMATION_TYPED:
            return action.isInformationTyped;
        default:
            return state;
    }
}

export function statusOfSending(state = '', action) {
    switch(action.type) {
        case actionTypes.STATUS_OF_SENDING:
            return action.statusOfSending;
        default:
            return state;
    }
}