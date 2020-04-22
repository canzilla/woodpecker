import React from "react";
import MessageBox from './MessageBox';
import Grid from '@material-ui/core/Grid';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import MainGridItem from "./MainGridItem";
import {UserContext} from "../context/UserContext";


const useStyles = makeStyles((theme) =>
    createStyles({
        rootGrid: {
            maxHeight: '50vh',
            overflowY: 'auto',
            marginTop: 5,
            '&::-webkit-scrollbar': {
                width: '1em'
            },
            '&::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 16px rgba(0,0,0,1)',
                webkitBoxShadow: 'inset 10px 10px 16px rgba(0,0,0,1)'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,255,255,1)',
                outline: '1px solid slategrey'
            },
        },
    }));

export default function Main() {
    const {userData} = React.useContext(UserContext);
    const classes = useStyles();
    return (
        <Grid container item={true} xs={12} className={classes.rootGrid}>
            {
                userData.map((data, userId)=>{
                    return <MainGridItem key={userId} objectFromServer={data} userId = {userId}/>
                })
            }

            <MessageBox testSeverity="success"/>
        </Grid>
    );
}
