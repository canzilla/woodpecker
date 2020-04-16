import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { objectForDisplay } from '../actions/action';

export class TextBoxes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      objectForDisplay: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, attr){
    let object = {
      ...this.state.objectForDisplay,
      [attr]: event.target.value
    };
    this.setState({
      objectForDisplay: object
    });
    this.props.dispatchObjectForDisplay(object);
  }

  render() {
    const objectForDisplay = this.props.objectForDisplay;
    return (
      <div element-identifier="component-text-boxes">
        {
          Object.keys(this.props.objectForDisplay).map((attr, index) =>
            (<TextField
              element-identifier={`text-box-${attr}`}
              defaultValue={this.props.objectForDisplay[attr]}
              key={index}
              variant="outlined"
              size="small"
              onChange={(e) => this.handleChange(e, attr)}
              value={ this.props.objectForDisplay[attr] }
            />
            )
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { objectForDisplay: state.objectForDisplay };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchObjectForDisplay: (object) => dispatch(objectForDisplay(object))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextBoxes);