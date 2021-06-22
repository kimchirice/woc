import React from "react";
import { Link } from "react-router-dom";

import { Container, Grid, Paper, Button } from "@material-ui/core";
import landingSvg from "../../res/img/women.svg";
import styles from "./Landing.style";
import cardData from "./cardData";

/* 
    Landing page component
*/

// card for item box
const Card = ({ item, index }) => {
    const classes = styles();

    return (
        <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
            <Paper className={classes.paper}>
                <img src={item.icon} alt="Icon" style={{ height: "125px", padding: "10px" }} />
                <header>
                    <strong style={{ fontFamily: `'Roboto Slab', serif`, fontSize: "20px" }}>{item.title}</strong>
                </header>
            </Paper>
        </Grid>
    );
};

function Landing() {
    const classes = styles();

    return (
        <>
            <Container>
                {/* main logo and text */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6} align="center" className={classes.root}>
                        <h1 className={classes.caption}>Fairer and more equitable Australia for all Women of Colour</h1>
                        <h5 className={classes.description}>We exist to champion Australia’s Women of Colour.</h5>
                        <Link to="/signup" className={classes.btnJoinLink}>
                            <Button variant="contained" /* color="secondary" */ className={classes.btnJoin}>
                                Join us
                            </Button>
                        </Link>
                    </Grid>
                    <Grid className={classes.imageDiv} item xs={12} sm={12} md={6} lg={6}>
                        <img className={classes.landingPic} src={landingSvg} alt="women of colour" />
                    </Grid>
                </Grid>
                {/* item boxes */}
                <Grid container>
                    <Grid container spacing={4} style={{ paddingTop: "4em" }}>
                        {cardData.map((item, index) => (
                            <Card item={item} index={index} key={item.id} />
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Landing;
