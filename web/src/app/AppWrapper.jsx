import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "./App";

const AppWrapper = () => {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios
            .get("/api/sample/")
            .then((res) => {
                setMessage(res.data.message);
            })
            .catch((error) => {
                console.log("Something went wrong: ", error);
                setMessage("Server not on");
            })
            .then(() => setLoading(false));
    }, []);

    return loading ? <>Nothing here</> : <App msg={message} />;
};

export default AppWrapper;
