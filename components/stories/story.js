import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        width: "90%",
        height: "250px",
        borderRadius: "20px",
        [theme.breakpoints.up("md")]: {
            width: "70%",
        },
    },
    button: {
        position: "absolute",
        bottom: "5%",
        left: "3%",
        borderRadius: "20px",
        "&:hover": {
            backgroundColor: "#e09524",
        },
    },
    textWhite: {
        color: "#fff",
    },
}));

const cleanURL = url => {
    return url.replace(/^.*\/\/[^\/]+/, "");
};

const Story = ({ item }) => {
    const classes = useStyles();
    const router = useRouter();
    //TITLE
    const [renderedTitle, setRenderedTitle] = React.useState("");

    React.useEffect(() => {
        if ("rendered" in item.title) {
            setRenderedTitle(item.title.rendered);
        }
    }, [item.title]);

    //AUTHORS
    const authors = () => {
        return item.coauthors.reduce((accumulator, author, i) => {
            let toReturn = "";

            if (item.coauthors.length - 2 === i) {
                toReturn = `${accumulator}${author.display_name} and `;
            } else if (item.coauthors.length - 1 !== i) {
                toReturn = `${accumulator}${author.display_name}, `;
            } else {
                toReturn = `${accumulator}${author.display_name}`;
            }
        }, "");
    };

    let imgSrc = !item.featured_image_src
        ? "/assets/banner_image.jpg"
        : post.featured_image_src;
    return (
        <>
            <Grid
                container
                item
                direction="column"
                justifyContent="center"
                alignContent="center"
            >
                <div
                    className={classes.root}
                    style={{
                        backgroundImage: `url(${imgSrc})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        endIcon={<ArrowForwardIosIcon />}
                        disableElevation
                        onClick={() => router.push(`stories/${item.slug}/`)}
                    >
                        Read More
                    </Button>
                </div>
            </Grid>
            <div style={{ height: 5 }} />
            <Grid
                item
                style={{
                    textAlign: "center",
                }}
            >
                <Typography variant="h5" className={classes.textWhite}>
                    {renderedTitle}
                </Typography>
                <Typography variant="subtitle2" className={classes.textWhite}>
                    {authors}
                </Typography>
            </Grid>
            <div style={{ height: 20 }} />
        </>
    );
};

export default Story;
