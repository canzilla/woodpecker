import React from "react";

import TextBoxes from './TextBoxes';
import MessageBox from './MessageBox';

export default function App() {
  const objectFromServer = {
    "thizz" : "this",
    "shall" : "shall",
    "pass" : "pass",
    "too" : "too"
  }
  const openCloseState = false;
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TextBoxes objectToDisplay={objectFromServer}/>
      <MessageBox open={openCloseState} openseverity="error" />
    </div>
  );
}
