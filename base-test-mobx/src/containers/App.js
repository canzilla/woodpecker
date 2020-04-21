/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import {observer} from 'mobx-react-lite';
import {inject} from 'mobx-react';
import TextBoxes from '../components/TextBoxes';
import MessageBox from '../components/MessageBox';
import Submit from '../components/Submit';
import { GRID_CONTAINER,GRID_ITEM } from '../test/DataTestIdTypes.js'


const App = inject('Store')(observer(({Store: 
  { setOpenCloseState,setObjectToDisplay}}) => {
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
  setObjectToDisplay(objectFromServerLocale);
  setOpenCloseState(false);

  const classes = styles();
  return (
    <Grid container data-testid={GRID_CONTAINER} direction="row" alignItems="center" style={classes} spacing={10}>
      <Grid data-testid={GRID_ITEM} item >
        <TextBoxes />
      </Grid>
      <Grid data-testid={GRID_ITEM} item>
        <Submit />
      </Grid>
      <MessageBox />
    </Grid>
  );
}));

export default App;
