/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import {observer} from 'mobx-react-lite';
import {inject} from 'mobx-react';
import { MESSAGEBOX_DIV,ALERT_COMPONENT,SNACKBAR_COMPONENT } from '../test/DataTestIdTypes.js'

const MessageBox = inject('Store')(observer(({Store: 
  { openseverity,openCloseState}}) => {
  return (
    <div data-testid={MESSAGEBOX_DIV}>
      <Snackbar data-testid={SNACKBAR_COMPONENT} open={openCloseState}>
        <Alert data-testid={ALERT_COMPONENT} severity={openseverity}>
          Message is 
          {' '}
          {openseverity}
        </Alert> 
      </Snackbar>
    </div>
  );
}));

export default MessageBox;