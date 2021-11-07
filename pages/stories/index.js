import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import Story from "../../components/stories/story";

import wp from "../../utils/wordpress";
import { useRouter } from "next/router";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        backgroundColor: "#bd2234",
    },
    container: {
        width: "95%",
        margin: "auto",
    },
    liveContainer: {
        backgroundColor: "#FBBA26",
        borderRadius: "30px",
    },
    button: {
        borderRadius: "20px",
        width: "70%",
        "&:hover": {
            backgroundColor: "#e09524",
        },
    },
}));

const Stories = ({ posts }) => {
    const classes = useStyles();

    const router = useRouter();

    const Header = ({ title }) => {
        return (
            <Grid item style={{ textAlign: "center" }}>
                <Typography
                    variant="h3"
                    style={{ fontFamily: "Squada One", color: "#fff" }}
                >
                    {title}
                </Typography>
            </Grid>
        );
    };

    return (
        <div className={classes.root}>
            <div style={{ height: 40 }} />
            <Grid
                container
                justifyContent="center"
                alignContent="center"
                spacing={2}
                className={classes.container}
            >
                <Grid item container md={6} direction="column" spacing={1}>
                    <Header title="Stories to Read" />

                    {posts.map(post => {
                        return (
                            <Grid item key={post.id}>
                                <Story item={post} />
                            </Grid>
                        );
                    })}
                    <div style={{ textAlign: "center" }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            endIcon={<ArrowForwardIosIcon />}
                            onClick={() => router.push("stories/stories-list")}
                        >
                            More Stories
                        </Button>
                    </div>
                </Grid>
                <Grid
                    item
                    container
                    md={6}
                    direction="column"
                    spacing={1}
                    className={classes.liveContainer}
                >
                    <Header title="FB Live" />
                </Grid>
            </Grid>
            <div style={{ height: 40 }} />
        </div>
    );
};

export async function getStaticProps() {
    try {
        const stories = await wp.posts().perPage(3);

        if (stories) {
            return { props: { posts: stories }, revalidate: 10 };
        } else {
            return { props: { posts: [] }, revalidate: 10 };
        }
    } catch (err) {
        console.log(err.message);
        return { props: { posts: [] }, revalidate: 10 };
    }
}

export default Stories;
