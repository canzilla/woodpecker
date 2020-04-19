import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { sendTypedInformationToService } from '../actions/action';

export class Submit extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.sendTypedInformationToService(this.props.objectForDisplay);
    }

    render() {
        const isInformationTyped = this.props.isInformationTyped;
        let buttonComponent = isInformationTyped ?
            (
              <Button 
                element-identifier="submit-button"
                data-testid="submit-button"
                variant="contained"
                onClick={this.handleClick}
              >
                Save
              </Button>
            )
            :
            null;
        return (
            <div element-identifier="component-submit" data-testid="component-submit">
                { buttonComponent }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isInformationTyped: state.isInformationTyped,
        objectForDisplay: state.objectForDisplay
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendTypedInformationToService: (object) => dispatch(sendTypedInformationToService(object))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Submit);