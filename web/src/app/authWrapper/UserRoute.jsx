import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import axios from "axios";

/* 
    wrapper for protected routes
*/

// this is re-rendering twice
// same thing happening with strict mode removed
// TODO: remove token check here
// TODO: global axios handler for bad token
const UserRoute = ({ component: Component, ...rest }) => {
    const { loggedIn, logOut } = useAuth();
    // call server to check token
    if (loggedIn) {
        axios
            .get("/api/user")
            .then((res) => {
                console.log("good token");
            })
            .catch((e) => {
                // bad token => clear token and logout
                if (e.response.status === 401) logOut();
            });
    }

    // redirect to login if not authenticated
    const access = (props) => {
        return loggedIn ? (
            <Component {...props} />
        ) : (
            // redirect to login if bad / no token
            <Redirect
                to={{
                    pathname: "/login",
                    state: { referer: props.location },
                }}
            />
        );
    };

    return <Route {...rest} render={access} />;
};

export default UserRoute;
