import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import PresidentCandidates from "../components/candidates/presidentCandidates";
import VicePresidentCandidates from "../components/candidates/vicePresidentCandidates";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        margin: 0,
        padding: 20,
    },
    container: {
        width: "90%",
        margin: "auto",
    },
}));

const Candidates = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.container} direction="column">
                <PresidentCandidates />
                <div style={{ height: 40 }} />
                <VicePresidentCandidates />
            </Grid>

            <div style={{ height: 40 }} />
        </div>
    );
};

export default Candidates;
