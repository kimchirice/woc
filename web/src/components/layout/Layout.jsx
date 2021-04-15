import React from "react";
import NavBar from "../navbar/NavBar";

/* 
    Layout component
*/

const Layout = ({ status, children }) => {
    return (
        <>
            <NavBar />

            <div>{children}</div>
        </>
    );
};

export default Layout;
