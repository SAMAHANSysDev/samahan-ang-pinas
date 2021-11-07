import { Grid, Typography, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    button: {
        borderRadius: "20px",
        "&:hover": {
            backgroundColor: "#e09524",
        },
    },
}));

const AboutContent = () => {
    const router = useRouter();
    const classes = useStyles();
    return (
        <Grid container direction="column" spacing={1}>
            <Grid item>
                <Typography variant="h3" component="h1" color="secondary">
                    About the Movement
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="h1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Typography>
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<ArrowBackIosIcon />}
                    className={classes.button}
                    onClick={() => router.push("/")}
                    disableElevation
                >
                    Home
                </Button>
            </Grid>
        </Grid>
    );
};

export default AboutContent;
