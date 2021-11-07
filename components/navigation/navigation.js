import React from "react";

import { useRouter } from "next/router";

import Button from "@material-ui/core/Button";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
//import routes from './routes';

import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles(theme => ({
    tab: {
        minWidth: 150,
        marginLeft: "2rem",
        alignItems: "center",
    },
    wrapperTab: {
        flexDirection: "row-reverse",
    },
    root: {
        marginLeft: 20,
        flexGrow: 1,
        justifyContent: "center",
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "block",
        },
    },
    scroller: {
        flexGrow: 0,
    },
    dropdownTabs: {
        color: fade(theme.palette.secondary.main, 0.7),
        minWidth: 150,
        alignItems: "center",
        marginLeft: "2rem",
        borderRadius: 0,
    },
    dropdownTabsWhite: {
        color: theme.palette.secondary.main,
        minWidth: 150,
        alignItems: "center",
        marginLeft: "2rem",
        borderRadius: 0,
    },
    dropdownMenu: {
        borderRadius: 0,
    },
}));

const routes = [
    {
        name: "Home",
        href: "/",
        title: "SAMAHAN ang PINAS",
        desc: "Homepage of SAMAHAN ang PINAS",
    },
    {
        name: "Data",
        href: "/data",
        title: "Data from SAMAHAN ang PINAS",
        desc: "Data statistics gained by yours truly SAMAHAN ang PINAS",
    },
    {
        name: "Candidates",
        href: "/candidates",
        title: "SAMAHAN ang PINAS - Philippine Election 2022 Candidates",
        desc: "Candidates in Election 2022",
    },
    {
        name: "About",
        href: "/about",
        title: "About SAMAHAN ang PINAS",
        desc: "About the advocacy of SAMAHAN ang PINAS",
    },
    {
        name: "Stories",
        href: "/stories",
        title: "Stories from SAMAHAN ang PINAS",
        desc: "Stories for SAMAHAN ang PINAS",
    },
];

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = () => {
    const router = useRouter();
    const classes = useStyles();
    const [route, setRoute] = React.useState("/");

    const baseUrlMenu = url => {
        return url !== "/" ? `${url.split("/").slice(0, 2).join("/")}` : "/";
    };

    React.useEffect(() => {
        setRoute(baseUrlMenu(router.pathname));
    }, [router.pathname]);

    const handleChange = (event, newValue) => {
        router.push(newValue);
        setRoute(baseUrlMenu(newValue));
    };

    const ButtonInTabs = ({ className, onClick, children, menu }) => {
        const [anchorEl, setAnchorEl] = React.useState(null);

        const handleClick = event => {
            setAnchorEl(event.currentTarget);
        };

        const changeRoute = (event, newValue) => {
            router.push(newValue);
            setRoute(baseUrlMenu(newValue));
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        return (
            <>
                <Button
                    className={className}
                    onClick={onClick}
                    children={children}
                    onClick={handleClick}
                />
                <Menu
                    id={menu.name}
                    PaperProps={{
                        className: classes.dropdownMenu,
                    }}
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {menu.submenu.map(subMenu => {
                        return (
                            <MenuItem
                                key={subMenu.name}
                                onClick={event =>
                                    changeRoute(event, subMenu.href)
                                }
                            >
                                {subMenu.name}
                            </MenuItem>
                        );
                    })}
                </Menu>
            </>
        );
    };

    const MenuTab = ({ menu }) => {
        console.log(route);
        if (!menu.hidden && !menu.mobileOnly) {
            return [
                "submenu" in menu ? (
                    <ButtonInTabs
                        key={menu.name}
                        value={menu.href}
                        className={
                            menu.href === route
                                ? classes.dropdownTabsWhite
                                : classes.dropdownTabs
                        }
                        menu={menu}
                    >
                        {menu.name} <ArrowDropDownIcon />
                    </ButtonInTabs>
                ) : (
                    <Tab
                        key={menu.name}
                        label={menu.name}
                        value={menu.href}
                        classes={{
                            root: classes.tab,
                            wrapper: classes.wrapperTab,
                        }}
                        icon={"submenu" in menu ? <ArrowDropDownIcon /> : null}
                    />
                ),
            ];
        }
    };

    return (
        <>
            <Tabs
                classes={{ root: classes.root, scroller: classes.scroller }}
                value={route}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
            >
                {/* <MenuTab menu={routes[0]} />
                <MenuTab menu={routes[1]} />
                <MenuTab menu={routes[2]} /> */}
                {routes.map(menu => {
                    console.log(menu.hidden);
                    return [
                        "submenu" in menu ? (
                            <ButtonInTabs
                                key={menu.name}
                                value={menu.href}
                                className={
                                    menu.href === route
                                        ? classes.dropdownTabsWhite
                                        : classes.dropdownTabs
                                }
                                menu={menu}
                            >
                                {menu.name} <ArrowDropDownIcon />
                            </ButtonInTabs>
                        ) : (
                            <Tab
                                key={menu.name}
                                label={menu.name}
                                value={menu.href}
                                classes={{
                                    root: classes.tab,
                                    wrapper: classes.wrapperTab,
                                }}
                                icon={
                                    "submenu" in menu ? (
                                        <ArrowDropDownIcon />
                                    ) : null
                                }
                            />
                        ),
                    ];
                })}
            </Tabs>
        </>
    );
};
export default Nav;
