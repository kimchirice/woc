import React from "react";
import { Link } from "react-router-dom";

// Navigation component containing links to other pages
const NavBar = () => {
    return (
        <ul>
            <NavLink dir="/">Main page</NavLink>
            <NavLink dir="/page1">Page 1</NavLink>
        </ul>
    );
};

// Navigation links for components
const NavLink = (props) => {
    const { dir, children } = props;
    return (
        <li>
            <Link to={dir}>{children}</Link>
        </li>
    );
};

export default NavBar;
