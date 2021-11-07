import React from "react";
import dynamic from "next/dynamic";
import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const AboutContent = dynamic(() =>
    import("../components/about/about_content.js")
);

const Initiatives = dynamic(() => import("../components/about/initiatives"));

const useStyles = makeStyles(theme => ({
    root: {
        width: "90%",
        margin: "auto",
    },
    logo_bg: {
        opacity: 0.1,
        position: "absolute",
        left: 100,
        top: 50,
        width: "45vw",
        height: "auto",
        zIndex: -1,
    },
}));

const About = () => {
    const classes = useStyles();
    return (
        <>
            <img src="/assets/sap_thumb_logo.png" className={classes.logo_bg} />
            <div style={{ height: 40 }} />
            <Grid
                container
                className={classes.root}
                justifyContent="center"
                alignContent="center"
                alignItems="center"
            >
                <Grid item md={7}>
                    <AboutContent />
                </Grid>
                <Grid container item md={5} justifyContent="center">
                    <Initiatives />
                </Grid>
            </Grid>
            <div style={{ height: 40 }} />
        </>
    );
};

export default About;
