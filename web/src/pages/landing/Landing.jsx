import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Paper, Button } from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import cardData from "./cardData";
import picture from "../../res/img/women.svg";
import "../../app/App.css";
import styles from "./Landing.style";

const Card = ({ item, index }) => {
    const classes = styles();

    return (
        <Grid item lg={3} key={index}>
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
                <Grid item xs={6} md={6} align="center">
                    <h5 className="caption">Fairer and more equitable Australia for all Women of Colour</h5>
                    <h5 className="description">We exist to champion Australia’s Women of Colour.</h5>
                    <Link to="/signup">
                        <Button variant="contained" className="btn-join">
                            Join us
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={picture} alt="women of colour" className="picture"></img>
                </Grid>
            </Grid>

            <Container style={{ marginTop: "2em" }}>
                <Grid container spacing={3}>
                    {cardData.map((item, index) => (
                        <Card item={item} index={index} />
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default Landing;
