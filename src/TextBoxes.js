import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function TextBoxes (props) {//todo bunu sonra state'ten alacagız
  const classes = useStyles();
  const textBox = Object.keys(props.objectToDisplay).map((attr, index)  => 
    <TextField 
      test-attr="text-fields"
      defaultValue={props.objectToDisplay[attr]}
      key={index} 
      variant="outlined"
      />
  )

  return (
    <div className={classes.root} test-attr="text-boxes-div">
    {textBox}
    </ div>
  );
}

export default TextBoxes;