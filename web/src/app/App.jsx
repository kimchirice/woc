import React from "react";
import "./App.css";
import PropTypes from "prop-types";

const App = ({ msg }) => {
    return (
        <div>
            <h1>{msg}</h1>
        </div>
    );
};

App.propTypes = {
    msg: PropTypes.string.isRequired,
};

export default App;
