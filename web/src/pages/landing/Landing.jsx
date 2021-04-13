import React from "react";

const Landing = (props) => {
    const { msg, status } = props;

    const color = msg ? "blue" : "green";
    const message = msg ? `says ${msg.toLowerCase()}` : "is sleeping";

    return (
        <div>
            <p>server status: {status ? "on" : "off"}</p>
            <p style={{ color: color }}>The server {message}</p>
        </div>
    );
};

export default Landing;
