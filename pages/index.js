import {
    Grid,
    Typography,
    Fab,
    Paper,
    Button,
    Hidden,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        margin: "auto",
        height: "80vh",
    },
    logo_bg: {
        opacity: 0.1,
        position: "absolute",
        right: 100,
        top: 50,
        width: "45vw",
        height: "auto",
        zIndex: -1,
    },
    pil_tower: {
        position: "absolute",
        width: "40%",
        height: "70%",
        bottom: 0,
        left: -150,
        zIndex: -1,
    },
    min_tower: {
        position: "absolute",
        width: "40%",
        height: "100%",
        bottom: 0,
        left: 50,
        zIndex: -2,
    },
    /* rectangle: {
        backgroundColor: "#233e8a",
        height: "15vh",
        width: "100vw",
        position: "absolute",
        bottom: 0,
    }, */
    content: {
        position: "absolute",
        width: "50%",
        top: "50%",
        right: 20,
        transform: "translate(0, -50%)",
    },
    scContainer: {
        marginTop: theme.spacing(1),
        display: "flex",
        alignContent: "center",
    },
    socialIcon: {
        backgroundColor: "#bf2234",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#991a29",
        },
        "-webkit-box-shadow": "none",
        "-moz-box-shadow": "none",
        boxShadow: "none",
    },
    button: {
        borderRadius: "20px",
        "&:hover": {
            backgroundColor: "#e09524",
        },
    },
}));

const Index = () => {
    const classes = useStyles();
    return (
        <>
            <Hidden xsDown>
                <img
                    src="/assets/Philippines.png"
                    className={classes.pil_tower}
                />
                <img src="/assets/Mindanao.png" className={classes.min_tower} />
            </Hidden>
            <img src="/assets/sap_thumb_logo.png" className={classes.logo_bg} />
            {/* <div className={classes.rectangle} /> */}
            <Grid
                className={classes.root}
                container
                justifyContent="center"
                alignContent="center"
            >
                <Grid item sm={6} />
                <Grid container item sm={6} direction="column" spacing={1}>
                    <Grid item>
                        <Typography variant="h2" component="h1" color="primary">
                            SAMAHAN ANG PINAS
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" component="h1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="secondary"
                            endIcon={<ArrowForwardIosIcon />}
                            className={classes.button}
                            disableElevation
                        >
                            Learn More
                        </Button>
                    </Grid>
                    <Grid item>
                        <div className={classes.scContainer}>
                            <Fab
                                size="medium"
                                color="secondary"
                                aria-label="add"
                                className={classes.socialIcon}
                                onClick={() =>
                                    window.open(
                                        "https://www.facebook.com/addu.cs"
                                    )
                                }
                                disableElevation
                            >
                                <FacebookIcon />
                            </Fab>
                            <Fab
                                size="medium"
                                color="secondary"
                                aria-label="add"
                                className={classes.socialIcon}
                                onClick={() =>
                                    window.open("https://twitter.com/ADDU_CS")
                                }
                                style={{ marginLeft: "10px" }}
                            >
                                <TwitterIcon />
                            </Fab>
                            <Fab
                                size="medium"
                                color="secondary"
                                aria-label="add"
                                className={classes.socialIcon}
                                onClick={() =>
                                    window.open(
                                        "https://www.instagram.com/addu_cs/"
                                    )
                                }
                                style={{ marginLeft: "10px" }}
                            >
                                <InstagramIcon />
                            </Fab>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Index;
