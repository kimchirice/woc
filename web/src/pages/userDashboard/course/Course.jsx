import { makeStyles, Card, CardHeader, CardContent, CardActionArea, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: theme.spacing(1),
    },
}));

export default function Course({ course }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardHeader title={course.title} subheader={course.date} />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {course.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
