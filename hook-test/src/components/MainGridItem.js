import React from "react";
import Grid from "@material-ui/core/Grid";
import TextBoxes from "./TextBoxes";
import Submit from "./Submit";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {createBridgeState} from "../helper/UserHelper";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            borderWidth: "2px",
            borderRadius: '5px',
            borderColor: 'rgb(255,42,42)',
            borderStyle: 'solid',
            boxShadow: 'inset 0 0 9px rgba(0,0,0,1)',
            height: '20%'
        },
    })
);


export default function MainGridItem(props) {
    const classes = useStyles();

    // TextBoxes ve Submit state/propslarını bağlamak için kullanılıyor.
    const bridgeState = createBridgeState();
    return (
        <Grid container className={classes.root} justify="space-between" alignItems="center">
            <Grid item={true} xs="7">
                <TextBoxes objectToDisplay={props.objectFromServer} bridgeState={bridgeState}/>
            </Grid>
            <Grid item={true} xs="4">
                <Submit bridgeState={bridgeState} userId = {props.userId}/>
            </Grid>
        </Grid>
    )

};
