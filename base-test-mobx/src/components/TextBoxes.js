/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {observer} from 'mobx-react-lite';
import {inject} from 'mobx-react';
import { TEXT_BOXES_CONTAINER,TEXT_FIELDS } from '../test/DataTestIdTypes.js'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const TextBoxes = inject('Store')(observer(({Store: 
  { objectToDisplay }}) => {
  const classes = useStyles();
  const textBox = Object.keys(objectToDisplay).map((attr, index)  => (
    <TextField 
      data-testid={TEXT_FIELDS}
      inputProps={{
        'data-testid': 'text-input-fields'
      }}
      defaultValue={objectToDisplay[attr]}
      key={index} 
      variant="outlined"
      size="small"
    />
  ))
  return (
    <div className={classes.root} data-testid={TEXT_BOXES_CONTAINER}>
      {textBox}
    </div>
  );
}));

export default TextBoxes;