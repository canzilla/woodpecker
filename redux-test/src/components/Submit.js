import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

export class Submit extends Component{
    render(){
        return(
            <div test-attr="test-submit-div">
             <Button test-attr="test-submit-button" variant="contained">Save</Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { objectForDisplay: state.objectForDisplay };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {};
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Submit);