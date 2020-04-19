import { actionTypes } from './actionTypes';
import axios from 'axios';

/**
 * Function to dispatch response and sending to service value of AXIOS
 * @method objectForDisplay
 * @param {object} objectForDisplay - object for display
 */
export function objectForDisplay(objectForDisplay){
    return {
        type: actionTypes.OBJEC_FOR_DISPLAY,
        objectForDisplay
    };
}

export function isInformationTyped(isInformationTyped){
    return {
        type: actionTypes.IS_INFORMATION_TYPED,
        isInformationTyped
    };
}

export function statusOfSending(statusOfSending){
    return {
        type: actionTypes.STATUS_OF_SENDING,
        statusOfSending
    };
}

export function sendTypedInformationToService(object){
    return function(dispatch) {
        return axios.post('/saveThis', object)
        .then((response)=>{
            dispatch(statusOfSending(response.data));
        })
        .catch(function(err){
            console.log("content could not be saved", err);
            let errStatus = {
                status: 'error',
                open: true
            }
            dispatch(statusOfSending(errStatus));
        });
    };
}