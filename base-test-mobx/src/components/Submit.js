/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from '@material-ui/core/Button';

export default function Submit(){
    return(
      <div test-attr="test-submit-div">
        <Button test-attr="test-submit-button" variant="contained">Save</Button>
      </div>
    );
}