import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import {Alert} from '@material-ui/lab';
import {UserContext} from "../context/UserContext";


function MessageBox(props) {

    const {showStatus, dispatch} = React.useContext(UserContext);

    const handleClose =()=> {
        //dispatch(Snackbar_Update_Status(false));
    };

    return (
        <div test-attr="message-box-div">
            <Snackbar
                element-identifier="message-box-snackbar"
                autoHideDuration={2000}
                open={showStatus}
                onClose={handleClose}
            >
                <Alert element-identifier="message-box-alert" severity={props.testSeverity}>
                    Message is success
                </Alert>
            </Snackbar>
        </div>
    );
}


export default MessageBox;