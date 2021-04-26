import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import AppWrapper from "./app/AppWrapper";
import FortAwesomeIcons from "./components/FortAwesome/FortAwesomeIcons";

ReactDOM.render(
    <React.StrictMode>
        <FortAwesomeIcons>
            <AppWrapper />
        </FortAwesomeIcons>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
