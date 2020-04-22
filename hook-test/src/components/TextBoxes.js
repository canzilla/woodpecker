import React from 'react';
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

function TextBoxes (props) {
  const classes = useStyles();
  const textBox = Object.keys(props.objectToDisplay).map((attr, index)  =>
    <TextField
      test-attr={"text-fields-" + attr}
      defaultValue={props.objectToDisplay[attr]}
      key={index}
      variant="outlined"
      size="small"
      onChange={(e)=>{updateTextFieldText(e, attr, props.bridgeState)}}
      />
  );

  return (
    <div className={classes.root} bridgeState={props.bridgeState} test-attr="text-boxes-div">
    {textBox}
    </ div>
  );
}

export default TextBoxes;

function updateTextFieldText(e, attr, bridgeState) {
  bridgeState['userObject'][attr] = e.target.value;
  bridgeState.showSubmit(true);
}