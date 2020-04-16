import React, { Component } from "react";
import TextBoxes from './components/TextBoxes';
import MessageBox from './components/MessageBox';
import Submit from './components/Submit';
import Grid from '@material-ui/core/Grid';

export class App extends Component {
  render() {
    return (
      <div>
        <TextBoxes />
      </div>
    );
  }
}

export default App;