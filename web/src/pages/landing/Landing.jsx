import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import picture from "../../res/img/women.svg";
import "../../app/App.css";
import styles from "./Landing.style";

const cardData = [
    {
        icons: ["fas", "chalkboard-teacher"],
        title: "Mentoring",
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.",
    },
    {
        icons: ["fas", "desktop"],
        title: "Online courses",
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.",
    },
    {
        icons: ["fas", "bookreader"],
        title: "Book club",
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.",
    },
    {
        icons: ["fas", "comments"],
        title: "Chat rooms",
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.",
    },
];

const Card = ({ item, index }) => {
    const classes = styles();

    return (
        <Grid item xs={3} key={index}>
            <Paper className={classes.paper}>
                <FontAwesomeIcon icon={item.icons} />
                <header>
                    <strong>{item.title}</strong>
                </header>
                <p>{item.desc}</p>
            </Paper>
        </Grid>
    );
};

function Landing() {
    const classes = styles();

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={6} md={6}>
                    <h5 className="caption">Fairer and more equitable Australia for all Women of Colour</h5>
                    <h5 className="description">We exist to champion Australia’s Women of Colour. Join us.</h5>
                    <button type="button" className="btn-join" onClick="#">
                        Click here
                    </button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={picture} alt="women of colour" className="picture"></img>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                {cardData.map((item, index) => (
                    <Card item={item} index={index} />
                ))}
            </Grid>
        </>
    );
}

export default Landing;
