import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
function TextBoxes (props) {//todo bunu sonra state'ten alacagız

  const textBox = Object.keys(props.objectToDisplay).map((attr, index)  => 
    <TextField test-attr="text-box-span" defaultValue={props.objectToDisplay[attr]} key={index} />
  )

  return (
    <div test-attr="text-boxes-div">
    {textBox}
    </ div>
  );
}

export default TextBoxes;