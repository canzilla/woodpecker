import {SNACKBAR_UPDATE_STATUS, UPDATE_USER} from "../consts/UserConsts";

export const init = (initParams) => {
    return {
        userData: [
            {
                userName: "Mehmet",
                userSurName: "Katı",
                userCountry: "Turkey"
            },
            {
                userName: "Mehmet_1",
                userSurName: "Katı_1",
                userCountry: "Turkey"
            },
            {
                userName: "Mehmet_2",
                userSurName: "Katı_2",
                userCountry: "Turkey"
            },
            {
                userName: "Mehmet_3",
                userSurName: "Katı_3",
                userCountry: "Turkey"
            },
            {
                userName: "Mehmet_4",
                userSurName: "Katı_4",
                userCountry: "Turkey"
            },
            {
                userName: "Mehmet_5",
                userSurName: "Katı_5",
                userCountry: "Turkey"
            },
            {
                userName: "Mehmet_6",
                userSurName: "Katı_6",
                userCountry: "Turkey"
            },
        ],
        showStatus:false
    }
};

export const UserReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_USER:
            return {
                ...updateUser(state, action),
            };
        case SNACKBAR_UPDATE_STATUS:
            return {
                ...updateAlertShow(state, action)
            };

        default:
            return {...state};
    }

};

function updateAlertShow(state, action) {
    state.showStatus = action.showStatus;
    return state;
}
function updateUser(state, action) {
    Object.keys(action.userObject).map((value, key)=>{
         state['userData'][action.userId][value] = action.userObject[value];
    });
    state.showStatus=true;
    return state;
}