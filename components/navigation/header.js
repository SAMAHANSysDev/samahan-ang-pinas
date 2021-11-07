import React from "react";

import { useRouter } from "next/router";
import Image from "next/image";

import Navigation from "./navigation";
import NavBurger from "./nav-burger";
//import NavBurger from "navigation/nav-burger";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

import MenuIcon from "@material-ui/icons/Menu";

//import Button from 'components/Button';

//import { cdnURL } from "utils/constants";

const useStyles = makeStyles(theme => ({
    samahanLogo: {
        width: "calc(180px + 1.5vw)",
        marginTop: "10px",
        marginBottom: "10px",
    },
    sapLogo: {
        "&:hover": {
            cursor: "pointer",
        },
    },
    root: {
        flexGrow: 1,
        marginBottom: 20,
    },
    navbar: {
        marginTop: 30,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        margin: "auto",
    },
    secondaryLogo: {
        display: "block",
    },
    helpButton: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "block",
        },
    },
    rightSpace: {
        width: 50,
        marginRight: theme.spacing(2),
        display: "block",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        display: "block",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    searchButton: {
        marginLeft: theme.spacing(2),
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },

    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

function SearchAppBar() {
    const classes = useStyles();
    const [drawer, setDrawer] = React.useState(false);
    const router = useRouter();

    const toggleDrawer = open => event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setDrawer(open);
    };

    const MenuLink = ({ name, href }) => {
        const newWindow = name === "Candidates" ? "_blank" : "";
        return (
            <div
                style={
                    router.pathname === href
                        ? { borderBottom: "3px solid #BF2234" }
                        : null
                }
            >
                <Link
                    href={href}
                    target={newWindow}
                    variant="h6"
                    underline="none"
                    style={{ color: "#000" }}
                >
                    {name}
                </Link>
            </div>
        );
    };

    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                style={{ backgroundColor: "transparent" }}
                elevation={0}
            >
                <Toolbar>
                    <IconButton
                        onClick={toggleDrawer(true)}
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor={"left"}
                        open={drawer}
                        onClose={toggleDrawer(false)}
                    >
                        <NavBurger onChosen={() => setDrawer(false)} />
                    </Drawer>
                    <div className={classes.navbar}>
                        <MenuLink name="Data" href="/data" />
                        <div style={{ marginRight: 40 }} />
                        <MenuLink
                            name="Candidates"
                            href="http://bluevote.addu.edu.ph"
                        />
                        <div style={{ marginRight: 40 }} />
                        <Image
                            src="/assets/sap_logo.png"
                            width={140}
                            height={60}
                            priority
                            alt="sap logo"
                            onClick={() => router.push("/")}
                            className={classes.sapLogo}
                        />
                        <div style={{ marginRight: 40 }} />
                        <MenuLink name="About" href="/about" />
                        <div style={{ marginRight: 40 }} />
                        <MenuLink name="Stories" href="/stories" />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

// Connect the Header component to get access to the `state` in it's `props`
export default SearchAppBar;
