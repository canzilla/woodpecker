import React from "react";
import ReactDOM from "react-dom";
import {UserContextProvider} from "./context/UserContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
<App />,
    rootElement
);
