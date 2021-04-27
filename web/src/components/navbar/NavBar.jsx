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
}));

const NavBar = () => {
    const classes = styles();

    return (
        <>
            <AppBar style={{ flexGrow: 1 }}>
                <Toolbar>
                    <Link to="/">
                        <div className={classes.flex}>
                            <img className="logo-image" src={logo}></img>
                        </div>
                    </Link>
                    <Typography variant="h6" className={classes.flex}></Typography>
                    <Link to="/login">
                        <Button>Login</Button>
                    </Link>
                    <Link to="/signup">
                        <Button>Sign up</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default NavBar;
