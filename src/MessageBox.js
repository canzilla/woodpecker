import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';

class MessageBox extends Component{

  render(){
    return (
      <div test-attr="message-box-div">
        <Snackbar test-attr = "snackbar-component" open = {this.props.open}>
          <Alert test-attr= "alert-component" severity={this.props.severity}>
            Message is {this.props.severity}
          </Alert> 
        </Snackbar>
      </div>
    );
  }
}

export default MessageBox;