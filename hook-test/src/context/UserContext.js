import React, {useReducer} from "react";
import {init, UserReducer} from "../reducer/userReducer";

export const UserContext = React.createContext(init([]));

export const UserContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(UserReducer, [], init);
    return(
        <UserContext.Provider value={{...state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
};