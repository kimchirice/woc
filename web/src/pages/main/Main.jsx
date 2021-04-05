import React from 'react'

const Main = (props) => {
    const { msg } = props

    const color = msg ? "blue" : "green";
    const message = msg? `says ${msg.toLowerCase()}` : "is sleeping";

    return (
        <div>
            <p style={{"color": color}}>The server {message}</p>
        </div>
    )
}

export default Main
