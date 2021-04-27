import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/";
import { Link } from "react-router-dom";
import logo from "../../res/img/2.png";
import "./NavBar.css";

/* 
    Handing main navigation bar for site

    - NavItems might be change due to authentication status
    - Move regular css to MUI css
*/

const styles = makeStyles((theme) => ({
    flex: {
        flexGrow: 1,
    },
    navItem: {
        color: "white",
        fontSize: "1.5em",
    },
    offset: theme.mixins.toolbar,
    offsetPad: { paddingBottom: theme.spacing(1) },
}));

const NavBar = () => {
    const classes = styles();

    return (
        <>
            <AppBar className={classes.flex}>
                <Toolbar>
                    <Link to="/">
                        <div className={classes.flex}>
                            <img className="logo-image" src={logo} alt="landing page art"></img>
                        </div>
                    </Link>
                    <Typography variant="h6" className={classes.flex}></Typography>
                    <Link to="/login">
                        <Button className={classes.navItem}>Login</Button>
                    </Link>
                    <Link to="/signup">
                        <Button className={classes.navItem}>Sign up</Button>
                    </Link>
                </Toolbar>
            </AppBar>
            <div className={`${classes.offset}`} />
            <div className={`${classes.offsetPad}`} />
        </>
    );
};

export default NavBar;
