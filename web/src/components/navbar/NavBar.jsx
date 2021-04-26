import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../res/img/2.png";
import "./NavBar.css";

/* 
    Handing main navigation bar for site

    - NavItems might be change due to authentication status
*/

const NavItems = [
    { title: "Log in", url: "/login" },
    { title: "Sign up", url: "/signup" },
];

const NavItem = ({ item, index }) => (
    <li key={index}>
        <Link className="nav-links" to={item.url}>
            {item.title}
        </Link>
    </li>
);

class NavBar extends React.Component {
    renderNavItems = () => NavItems.map((item, index) => <NavItem index={index} item={item} />);

    render() {
        return (
            <Nav className="NavItems">
                <Link to="/">
                    <img className="logo-image" src={logo} alt="Women of Colour"></img>
                </Link>
                <div>
                    <ul className="navbar-title">{this.renderNavItems()}</ul>
                </div>
            </Nav>
        );
    }
}

export default NavBar;
