import { actionTypes } from './actionTypes';

/**
 * Function to dispatch response value of AXIOS
 * @method objectForDisplay
 * @param {object} objectForDisplay - object for display
 */
export function objectForDisplay(objectForDisplay){
    return {
        type: actionTypes.OBJEC_FOR_DISPLAY,
        objectForDisplay
    };
}