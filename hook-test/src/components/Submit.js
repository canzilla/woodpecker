import React from 'react';
import Button from '@material-ui/core/Button';
import {UserContext} from "../context/UserContext";
import {User_Update} from "../actions/UserAction";


export default function Submit(props) {
    const {dispatch} = React.useContext(UserContext);
    const [showSubmit, setShowSubmit] = React.useState(false);
    props.bridgeState.showSubmit = setShowSubmit;

    return (
        <div test-attr="test-submit-div" bridgestate={props.bridgeState}>
            {divContend()}
        </div>
    );

    function divContend() {
        return showSubmit ? createButton() : null
    }

    function createButton() {
        return (
            <Button
                test-attr="test-submit-button"
                variant="contained"
                onClick={() => updateUserObject()}
            >Save</Button>
        );
    }

    function updateUserObject() {
        props.bridgeState['userId'] = props.userId;
        //dispatch(User_Update(props.bridgeState));
        setShowSubmit(false);
    }
}
