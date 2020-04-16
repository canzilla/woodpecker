import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function Submit(){
    return(
        <div test-attr="test-submit-div">
         <Button test-attr="test-submit-button" variant="contained">Save</Button>
        </div>
    );
}