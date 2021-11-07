import React from "react";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#233e8a",
        padding: 10,
        width: "100%",
    },
    text: {
        color: theme.palette.secondary.main,
        textAlign: "center",
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.text}
            >
                Copyright {new Date().getFullYear()} SAMAHAN Central Board |
                Developed by SAMAHAN Creative Team and SAMAHAN System
                Development
            </Typography>
            <Typography
                variant="caption"
                color="textSecondary"
                component="p"
                className={classes.text}
            >
                Web Design by{" "}
                <Link
                    href="https://twitter.com/stephanieignas"
                    color="inherit"
                    target="_blank"
                    rel="noopener"
                >
                    Stephanie Lorraine Ignas
                </Link>{" "}
                and{" "}
                <Link
                    href="https://twitter.com/DwightDeJesus"
                    color="inherit"
                    target="_blank"
                    rel="noopener"
                >
                    Dwight Ian De Jesus
                </Link>
            </Typography>
        </div>
    );
};

// Connect the Header component to get access to the `state` in it's `props`
export default Footer;
