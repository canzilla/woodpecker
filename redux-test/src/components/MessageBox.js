import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import { statusOfSending } from '../actions/action';

export class MessageBox extends Component{

  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(){
    const newStatus = {
      ...this.props.statusOfSending,
      open: false
    };
    this.props.dispatchStatusOfSending(newStatus);
  }

  render(){
    const status = this.props.statusOfSending;
    return (
      <div element-identifier="component-message-box" data-testid="component-message-box" >
        <Snackbar 
          element-identifier="message-box-snackbar"
          data-testid="message-box-snackbar"
          autoHideDuration={6000} 
          open={status.open} 
          onClose={this.handleClose}
        >
          <Alert
            element-identifier= "message-box-alert"
            data-testid="message-box-alert"
            severity={status.status}
          >
            Message is {status.status}
          </Alert> 
        </Snackbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    statusOfSending: state.statusOfSending
  };
}

const mapDispatchToProps = (dispatch) => {
  return{
    dispatchStatusOfSending: (object) => dispatch(statusOfSending(object))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);