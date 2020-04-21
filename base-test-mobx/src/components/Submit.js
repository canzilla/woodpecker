/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from '@material-ui/core/Button';
import {observer} from 'mobx-react-lite';
import {inject} from 'mobx-react';
import { TEST_SUBMIT_DIV,TEST_SUBMIT_BUTTON } from '../test/DataTestIdTypes.js'

const Submit = inject('Store')(observer(({Store: 
  { setOpenCloseState }}) => {
    return(
      <div data-testid={TEST_SUBMIT_DIV}>
        <Button data-testid={TEST_SUBMIT_BUTTON} variant="contained" onClick={()=>{setOpenCloseState(true);}}>Save</Button>
      </div>
    );
}));
export default Submit;