import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Paper, Button } from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import cardData from "./cardData";
import landingSvg from "../../res/img/women.svg";
import styles from "./Landing.style";

/* 
    Landing page component
*/

const Card = ({ item, index }) => {
    const classes = styles();

    return (
        <Grid item lg={3} key={index}>
            <Paper className={classes.paper}>
                <FontAwesomeIcon icon={item.icons} size="2x" />
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
                <Grid item xs={6} md={6} align="center" className={classes.root}>
                    <h1 className={classes.caption}>Fairer and more equitable Australia for all Women of Colour</h1>
                    <h5 className={classes.description}>We exist to champion Australia’s Women of Colour.</h5>
                    <Link to="/signup">
                        <Button variant="contained" className={classes.btnJoin}>
                            Join us
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={6} md={6}>
                    <img className={classes.landingPic} src={landingSvg} alt="women of colour" />
                </Grid>
            </Grid>

            <Container style={{ marginTop: "2em" }}>
                <Grid container spacing={5}>
                    {cardData.map((item, index) => (
                        <Card item={item} index={index} />
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default Landing;
