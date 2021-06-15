import React, { useState } from "react";
import App from "./App";
import axios from "axios";

import { getToken, setToken } from "../utils/auth";

/* 
    Top level component
    Used to handling auth and context only
*/

/* 
    NOTES:
        - what needs to be considered
        - login status
        - login (set key)
        - logout (clear key)
    
    TODO:
        - not yet handled admin permissions
        - maybe lets just check key payload then apply it

*/

import { AuthContext } from "../contexts/authContext";

const AppWrapper = () => {
    const [loggedIn, setLoggedIn] = useState(getToken() !== null);
    // const [isAdmin, setIsAdmin] = useState(false);

    const logIn = (tk) => {
        setToken(tk);
        setLoggedIn(getToken());
    };
    const logOut = () => {
        setToken(null);
        setLoggedIn(false);
    };

    // check local storage and set auth
    // set default header key for api calls
    if (getToken()) axios.defaults.headers["Authorization"] = `Bearer ${getToken()}`;

    return (
        <AuthContext.Provider
            // fix what is passed in here
            value={{
                loggedIn,
                logIn,
                logOut,
            }}
        >
            <App />
        </AuthContext.Provider>
    );
};

export default AppWrapper;
