import { actionTypes } from '../actions/actionTypes';

export function objectForDisplay( state = {}, action ) {
    switch(action.type) {
        case actionTypes.OBJEC_FOR_DISPLAY:
            return action.objectForDisplay;
        default:
            return state;
    }
}