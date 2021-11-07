import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import Survey from "../components/data/survey";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        margin: "auto",
        background: "linear-gradient(180deg, #FAA728 0.34%, #FBBA26 38.3%)",
        position: "relative",
        /* "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "150px",
            background: "url('/assets/wave.png')",
            zIndex: 0,
        }, */
    },
    waves: {},
}));

const Data = () => {
    const classes = useStyles();
    return (
        <>
            {/* <div className={classes.waves}></div> */}
            <div className={classes.root}>
                <div style={{ height: 40 }} />
                <Grid
                    container
                    justifyContent="center"
                    alignContent="center"
                    spacing={2}
                >
                    <Grid item md={6}>
                        <Survey
                            title="Survey 1"
                            description="The description of survey 1"
                            imgSrc="/assets/image_1.jpg"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <Survey
                            title="Survey 1"
                            description="The description of survey 1"
                            imgSrc="/assets/image_1.jpg"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <Survey
                            title="Survey 1"
                            description="The description of survey 1"
                            imgSrc="/assets/image_1.jpg"
                        />
                    </Grid>
                </Grid>
                <div style={{ height: 40 }} />
            </div>
        </>
    );
};

export default Data;
