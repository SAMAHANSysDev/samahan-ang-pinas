import { Grid } from "@material-ui/core";
import React from "react";

import StoryCard from "../../components/stories/story-card";

import wp from "../../utils/wordpress";

const StoriesList = ({ posts }) => {
    return (
        <>
            <div style={{ height: 40 }} />
            <Grid
                container
                justifyContent="center"
                alignItems="stretch"
                style={{
                    paddingLeft: "clamp(50px, 10vw, 100px)",
                    paddingRight: "clamp(50px, 10vw, 100px)",
                }}
            >
                {posts.map(post => {
                    return (
                        <Grid
                            key={post.id}
                            item
                            style={{ margin: "clamp(10px, 10vw, 30px)" }}
                            sm={6}
                            md={3}
                        >
                            <StoryCard item={post} />
                        </Grid>
                    );
                })}
            </Grid>
            <div style={{ height: 40 }} />
        </>
    );
};

export async function getStaticProps() {
    try {
        const stories = await wp.posts().perPage(100);

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

export default StoriesList;
