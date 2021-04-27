import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../res/img/2.png";
import "./NavBar.css";

/* 
    Handing main navigation bar for site

    - NavItems might be change due to authentication status
*/

class NavBar extends React.Component {
    // renderNavItems = () => NavItems.map((item, index) => <NavItem index={index} item={item} />);

    render() {
        return (
            <>
                <AppBar style={{ flexGrow: 1 }}>
                    <Toolbar>
                        <Link to="/">
                            <div style={{ flexGrow: 1 }}>
                                <img className="logo-image" src={logo}></img>
                            </div>
                        </Link>
                        <Typography variant="h6" style={{ flexGrow: 1 }}></Typography>
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
    }
}

export default NavBar;
