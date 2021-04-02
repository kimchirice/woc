require("dotenv").config(); //.env file in main folder
// NOTE: feels bad? react having access to .env

/* 
    config for things
*/

const SERVER_PORT = process.env.SERVER_PORT || 1337;
const SERVER_HOSTNAME = process.SERVER_HOSTNAME || "localhost";
console.log(process.env.SERVER_PORT);

// exports
const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
};

const config = {
    server: SERVER,
};

module.exports = config;
