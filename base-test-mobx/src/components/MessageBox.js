/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import {observer} from 'mobx-react-lite';
import {inject} from 'mobx-react';

const MessageBox = inject('Store')(observer(({Store: 
  { openseverity,openCloseState}}) => {
  return (
    <div test-attr="message-box-div">
      <Snackbar test-attr="snackbar-component" open={openCloseState}>
        <Alert test-attr="alert-component" severity={openseverity}>
          Message is 
          {' '}
          {openseverity}
        </Alert> 
      </Snackbar>
    </div>
  );
}));

export default MessageBox;