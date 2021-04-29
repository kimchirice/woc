import React from "react";
import NavBar from "../navbar/NavBar";

/* 
    Layout component handling common layout for all pages

    currently only handling the navigation bar

*/

const Layout = ({ status, children }) => {
    return (
        <>
            <NavBar />
            <>{children}</>
        </>
    );
};

export default Layout;
