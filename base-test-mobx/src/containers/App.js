/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import {observer} from 'mobx-react-lite';
import {inject} from 'mobx-react';
import TextBoxes from '../components/TextBoxes';
import MessageBox from '../components/MessageBox';
import Submit from '../components/Submit';


const App = inject('Store')(observer(({Store: 
  { setOpenCloseState,setObjectFromServer}}) => {
  
  const styles = makeStyles(() =>({
    root: {
      flexGrow: 1,
    },
  }));

  const objectFromServerLocale = {
    "thizz" : "this",
    "shall" : "shall",
    "pass" : "pass",
    "too" : "too"
  };
  debugger;
  setObjectFromServer(objectFromServerLocale);
  setOpenCloseState(false);

  const classes = styles();
  return (
    <Grid container direction="row" alignItems="center" className={classes}>
      <Grid item spacing={15}>
        <TextBoxes />
      </Grid>
      <Grid item spacing={15}>
        <Submit />
      </Grid>
      <MessageBox />
    </Grid>
  );
}));

export default App;
