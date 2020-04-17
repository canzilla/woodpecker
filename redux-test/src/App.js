import React, { Component } from "react";
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

export class App extends Component {
  componentWillMount(){
    //TODO send request to service and than call dispatchObjectForDisplay method with response of the that request
    this.props.dispatchObjectForDisplay(objectFromServer);
  }

  render() {
    return (
      <div>
        <Grid container direction="row" alignItems="center">
          <Grid item spacing={15}>
            <TextBoxes/>
          </Grid>
          <Grid item spacing={15}>
            <Submit />
          </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);