/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from '@material-ui/core/Button';
import {observer} from 'mobx-react-lite';
import {inject} from 'mobx-react';

const Submit = inject('Store')(observer(({Store: 
  { setOpenCloseState }}) => {
    return(
      <div test-attr="test-submit-div">
        <Button test-attr="test-submit-button" variant="contained" onClick={()=>{setOpenCloseState(true);}}>Save</Button>
      </div>
    );
}));
export default Submit;