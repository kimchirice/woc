import React from "react";
import { Link } from "react-router-dom";

// Navigation component containing links to other pages
const NavBar = () => {
    return (
        <ul>
            <NavLink dir="/">LandingPage</NavLink>
            <NavLink dir="/user">DashBoard</NavLink>
            <NavLink dir="/login">Login</NavLink>
            <NavLink dir="/register">register</NavLink>
        </ul>
    );
};

// Navigation links for NavBar
const NavLink = ({ dir, children }) => (
    <li>
        <Link to={dir}>{children}</Link>
    </li>
);

export default NavBar;
