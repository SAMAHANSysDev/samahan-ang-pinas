import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Router from "next/router";

import parse from "html-react-parser";

import wp from "../../utils/wordpress";
import { frontendURL } from "../../utils/constants";

const useStyles = makeStyles(() => ({
    root: {
        width: "90%",
        margin: "auto",
    },
    feature_img: {
        borderRadius: "20px",
    },
    story_title: {
        fontFamily: "Squada One",
    },
    content: {
        width: "100%",
    },
    button: {
        borderRadius: "20px",
        "&:hover": {
            backgroundColor: "#e09524",
        },
    },
}));

const Story = ({ post }) => {
    const classes = useStyles();

    const coauthors = () => {
        return post.coauthors.reduce((accumulator, coauthor, i) => {
            let toReturn = "";
            if (post.coauthors.length - 2 === i) {
                toReturn = `${accumulator}${coauthor.display_name} and `;
            } else if (post.coauthors.length - 1 !== i) {
                toReturn = `${accumulator}${coauthor.display_name}, `;
            } else {
                toReturn = `${accumulator}${coauthor.display_name}`;
            }
            return toReturn;
        }, "");
    };

    const featured_img = !post.featured_image_src
        ? "/assets/sample_title.PNG"
        : post.featured_image_src;

    return (
        <>
            <Head>
                <title>{post.title.rendered} - Stories</title>
                <meta
                    name="description"
                    content={post.excerpt.rendered.replace(/<[^>]+>/g, "")}
                />
                <meta name="twitter:card" value="summary_large_image" />
                <meta property="og:title" content={post.title.rendered} />
                <meta property="og:type" content="article" />
                {post.featured_image_src ? (
                    <>
                        <meta
                            property="og:image"
                            content={post.featured_image_src}
                        />
                        <meta
                            name="twitter:image"
                            content={post.featured_image_src}
                        />
                    </>
                ) : (
                    <>
                        {/* <meta
                            property="og:image"
                            content={`${cdnURL}/samahan-seo-default.png`}
                        />
                        <meta
                            name="twitter:image"
                            content={`${cdnURL}/samahan-seo-twitter-default.png`}
                        /> */}
                    </>
                )}
                <meta
                    property="og:url"
                    content={`${frontendURL}/stories/${post.slug}`}
                />
                <meta
                    property="og:description"
                    content={post.excerpt.rendered.replace(/<[^>]+>/g, "")}
                />
            </Head>
            <Grid
                className={classes.root}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item>
                    <img
                        src={featured_img}
                        width="100%"
                        alt="story title"
                        className={classes.feature_img}
                    />
                </Grid>
                <Grid item container>
                    <Button
                        startIcon={<ArrowBackIosIcon />}
                        className={classes.button}
                        color="secondary"
                        variant="contained"
                        disableElevation
                        onClick={() => Router.back()}
                    >
                        Back
                    </Button>
                </Grid>
                <Grid item style={{ textAlign: "center" }}>
                    <Typography variant="h3" className={classes.story_title}>
                        {post.title.rendered}
                    </Typography>
                    <Typography variant="body1">
                        by {coauthors()} on {new Date(post.date).toDateString()}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        component="div"
                        className={classes.content}
                    >
                        {parse(post.content.rendered, {
                            replace: domNode => {
                                if (domNode?.tagName == "img") {
                                    return (
                                        <center>
                                            <img
                                                style={{ maxWidth: "100%" }}
                                                src={domNode?.attribs.src}
                                                alt={domNode?.attribs.alt}
                                            />
                                        </center>
                                    );
                                }
                            },
                        })}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export async function getStaticPaths() {
    let posts = [];
    try {
        posts = await wp.posts();
    } catch (err) {
        console.log(err.message);
        posts = [];
    }

    let paths = [];
    for (let post of posts) {
        paths.push({
            params: { slug: post.slug },
        });
    }

    return {
        paths: paths,
        fallback: true,
    };
}

export async function getStaticProps(ctx) {
    let post = [];
    try {
        post = await wp.posts().slug(ctx.params.slug);
    } catch (err) {
        console.log(err);
        post = [];
    }

    if (post) {
        return { props: { post: post[0] }, revalidate: 10 };
    }

    return { props: { post: null }, revalidate: 10 };
}

export default Story;
