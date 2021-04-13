import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import "./App.css";

// route pages components imports
import Main from "../pages/main/Main";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

/* 
    TODO: 
    [ ] set up auth containers
    [ ] set up roles containers
    [ ] set up auth context
*/

const App = (props) => {
    const { msg, status } = props;

    const serverStatus = () => (status ? "on" : "off");

    return (
        <BrowserRouter>
            <NavBar />

            <p>server status: {serverStatus()}</p>

            {/* routing */}
            <Route exact path="/" component={() => <Main msg={msg} color="green" />} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </BrowserRouter>
    );
};

App.propTypes = {
    msg: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
};

export default App;
