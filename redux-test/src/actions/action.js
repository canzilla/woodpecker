import { actionTypes } from './actionTypes';

export function objectForDisplay(objectForDisplay){
    return {
        type: actionTypes.OBJEC_FOR_DISPLAY,
        objectForDisplay
    };
}