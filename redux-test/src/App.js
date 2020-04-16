import React from "react";

import TextBoxes from './TextBoxes';
import MessageBox from './MessageBox';
import Submit from './Submit';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";

export default function App() {

  const styles = makeStyles((theme) =>({
    root: {
      flexGrow: 1,
    },
  }));

  const objectFromServer = {
    "thizz" : "this",
    "shall" : "shall",
    "pass" : "pass",
    "too" : "too"
  }

  const openCloseState = false;
  const classes = styles();
  return (
    <Grid container direction="row" alignItems="center" className={classes}>
      <Grid item spacing={15}>
       <TextBoxes objectToDisplay={objectFromServer}/>
      </Grid>
      <Grid item spacing={15}>
       <Submit />
      </Grid>
      <MessageBox open={openCloseState} openseverity="error" />
    </Grid>
  );
}
