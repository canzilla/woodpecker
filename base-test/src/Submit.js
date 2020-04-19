import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Button from '@material-ui/core/Button';

export default function Submit(){
    const contentThatWillComeFromState = {
        "show" : "show",
        "must" : "must",
        "go" : "go",
        "on" : "on"
    }
    return(
        <div test-attr="test-submit-div">
         <Button 
         test-attr="test-submit-button" 
         variant="contained"
         onClick={saveTheContent(contentThatWillComeFromState)}
         >Save</Button>
        </div>
    );
}

function saveTheContent(contentTobeSaved) {
    axios.post('/saveThis', contentTobeSaved)
    .then(console.log("content save"))
    .catch(function(err){
        console.log("content could not be saved", err);
    });
}