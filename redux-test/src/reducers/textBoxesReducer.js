import { actionTypes } from '../actions/actionTypes';

export function objectForDisplay( state = {}, action ) {
    switch(action.type) {
        case actionTypes.OBJEC_FOR_DISPLAY:
            const newState = action.objectForDisplay;
            const mergeState = { 
                ...state,
                ...newState
            };
            return mergeState;
        default:
            return state;
    }
}