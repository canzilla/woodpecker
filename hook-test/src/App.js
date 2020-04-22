import React from "react";
import {UserContextProvider} from "./context/UserContext";
import Main from "./components/Main";


export default function App() {
    return (
        <UserContextProvider>
            <Main/>
        </UserContextProvider>
    )
}
