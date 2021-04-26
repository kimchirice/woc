import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Layout from "../components/layout/Layout";
import * as Pages from "../pages/Pages";

/* 
    TODO: 
    [ ] set up auth containers
    [ ] set up roles containers
    [ ] set up auth context
*/

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                {/* routing */}
                <Route exact path="/" component={() => <Pages.Landing />} />
                <Route path="/user" component={Pages.UserDashBoard} />
                <Route path="/login" component={Pages.Login} />
                <Route path="/signUp" component={Pages.SignUp} />
            </Layout>
        </BrowserRouter>
    );
};

App.propTypes = {};

export default App;
