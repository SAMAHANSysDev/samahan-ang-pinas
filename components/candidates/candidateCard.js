import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles(() => ({
    button: {
        borderRadius: "20px",
        color: "#fff",
        backgroundColor: "#BF2234",
        "&:hover": {
            backgroundColor: "#a31a2a",
        },
    },
    img: {
        borderRadius: "20px",
    },
    name: {
        color: "#fff",
    },
}));

const CandidateCard = ({ img, name, link }) => {
    const classes = useStyles();
    return (
        <Grid
            container
            item
            direction="column"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            md={2}
        >
            <Grid item xs={12} style={{ textAlign: "center" }}>
                <img
                    src="/assets/default_pic_male.png"
                    width="75%"
                    alt="Picture name"
                    className={classes.img}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" className={classes.name}>
                    John Cena
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="warning"
                    endIcon={<ArrowForwardIosIcon />}
                >
                    Know More
                </Button>
            </Grid>
        </Grid>
    );
};

export default CandidateCard;
