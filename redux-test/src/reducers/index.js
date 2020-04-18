import { combineReducers } from 'redux';
import { objectForDisplay } from './textBoxesReducer';
import { isInformationTyped, statusOfSending } from './submitReducer';

export default combineReducers({
    objectForDisplay, isInformationTyped, statusOfSending
});