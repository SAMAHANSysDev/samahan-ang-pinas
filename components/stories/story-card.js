import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";

const useStyles = makeStyles(theme => ({
    root: {},
}));

const cleanURL = url => {
    return url.replace(/^.*\/\/[^\/]+/, "");
};

const StoryCard = ({ item }) => {
    const classes = useStyles();
    const router = useRouter();

    //TITLE
    const [renderedTitle, setRenderedTitle] = React.useState("");

    React.useEffect(() => {
        if ("rendered" in item.title) {
            setRenderedTitle(item.title.rendered);
        }
    }, [item.title]);

    //EXCERPT
    const [renderedExcerpt, setRenderedExcerpt] = React.useState("");

    React.useEffect(() => {
        if ("rendered" in item.excerpt) {
            setRenderedExcerpt(
                item.excerpt.rendered.substring(0, 250) + " ..."
            );
        }
    }, [item.excerpt]);

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
            return toReturn;
        }, "");
    };

    let imgSrc = !item.featured_image_src
        ? "/assets/banner_image.jpg"
        : item.featured_image_src;

    return (
        <Card className={classes.root}>
            <CardActionArea
                onClick={() => router.push(`/stories/${item.slug}`)}
            >
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="250"
                    image={imgSrc}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {renderedTitle}
                    </Typography>
                    <Typography gutterBottom component="body1">
                        by {authors()}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        dangerouslySetInnerHTML={{
                            __html: renderedExcerpt,
                        }}
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default StoryCard;
