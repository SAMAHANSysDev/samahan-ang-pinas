import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Image from "next/image";

const Survey = ({ title, description, imgSrc, item = false }) => {
    return (
        <Grid
            item={item}
            container
            direction="column"
            alignItems="center"
            spacing={1}
        >
            <Grid item>
                <Typography
                    variant="h3"
                    component="h4"
                    style={{ color: "#fff" }}
                >
                    {title}
                </Typography>
            </Grid>
            <Grid item>
                <img src={imgSrc} width="100%" alt="Survey image" />
            </Grid>
            <Grid item>
                <Typography variant="body1" style={{ color: "#fff" }}>
                    {description}
                </Typography>
            </Grid>
        </Grid>
    );
};
export default Survey;
