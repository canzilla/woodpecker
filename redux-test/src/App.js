import React, { Component } from "react";
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import TextBoxes from './components/TextBoxes';
import MessageBox from './components/MessageBox';
import Submit from './components/Submit';
import Grid from '@material-ui/core/Grid';
import { objectForDisplay } from './actions/action';

const objectFromServer = {
  name : "Çağrı",
  surname : "Yenice",
  country : "Nazilli"
}

const styles = theme =>({
  root: {
    flexGrow: 1,
  },
});

export class App extends Component {
  componentWillMount(){
    //TODO send request to service and than call dispatchObjectForDisplay method with response of the that request
    this.props.dispatchObjectForDisplay(objectFromServer);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container direction="row" alignItems="center" className={classes.root} spacing={0}>
          <Grid item xs={8}>
            <TextBoxes/>
          </Grid>
          <Grid item xs={2}>
            <Submit />
          </Grid>
          <MessageBox />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchObjectForDisplay: (object) => dispatch(objectForDisplay(object))
  };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(App));