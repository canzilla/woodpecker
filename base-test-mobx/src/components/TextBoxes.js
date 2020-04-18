/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {observer} from 'mobx-react-lite';
import {inject} from 'mobx-react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const TextBoxes = inject('Store')(observer(({Store: 
  { objectToDisplay , objectFromServer }}) => {
  const classes = useStyles();
  const textBox = Object.keys(objectFromServer).map((attr, index)  => (
    <TextField 
      test-attr="text-fields"
      defaultValue={objectToDisplay[attr]}
      key={index} 
      variant="outlined"
      size="small"
    />
  ))
  return (
    <div className={classes.root} test-attr="text-boxes-div">
      {textBox}
    </div>
  );
}));

export default TextBoxes;