import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import "./App.css";

// route pages components imports
import Main from "../pages/main/Main";
import Page1 from "../pages/page1/Page1";

const App = (props) => {
    const { msg, status } = props

    const serverStatus = ()  => status ? "on" : "off";

    return (
        <BrowserRouter>
            <NavBar />

            <p>server status: {serverStatus()}</p>

            {/* routes */}
            <Route exact path="/" component={() => <Main msg={msg} color="green"/>}/>
            <Route path="/page1" component={Page1}/>
        </BrowserRouter>
    );
};

App.propTypes = {
    msg: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
};

export default App;
