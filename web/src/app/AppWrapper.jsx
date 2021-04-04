import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "./App";

const AppWrapper = () => {
    const [status, setStatus] = useState(false);
    const [message, setMessage] = useState("");

    // api call on load
    useEffect(() => {
        axios
            .get("/api/sample/")
            .then((res) => {
                setMessage(res.data.message);
                setStatus(true);
            })
            .catch((error) => {
                console.log("Something went wrong: ", error);
                setStatus(false);
            })
    }, []);

    // passing data to jsx
    return <App msg={message} status={status}/>
};

export default AppWrapper;
