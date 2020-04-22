import {UPDATE_USER, SNACKBAR_UPDATE_STATUS} from "../consts/UserConsts";

export function User_Update(data) {
    return {
        type:UPDATE_USER,
        userObject:data['userObject'],
        userId:data['userId']
    }
}

export function Snackbar_Update_Status(showStatus) {
    return {
        type:SNACKBAR_UPDATE_STATUS,
        showStatus:showStatus
    }
}