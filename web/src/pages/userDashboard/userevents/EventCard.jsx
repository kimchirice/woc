import React from "react";
import { makeStyles, Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";

/* 
    Events card
*/

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: theme.spacing(1),
    },
    media: {
        height: 140,
        // width: "85%",
        // maxWidth: "85%",
    },
}));

export default function EventCard({ event }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={event.url} title={event.title} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {event.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {event.date}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
