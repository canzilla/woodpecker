import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

export class TextBoxes extends Component {
  constructor(props) {
    super(props);
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
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(TextBoxes);