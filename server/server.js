const http = require("http");
const express = require("express");
const logging = require("./config/logging");
const path = require("path");
const config = require("./config/config");

/* 
    Server stuff
*/
require("dotenv").config();

// config
const NAMESPACE = "SERVER";
const app = express();

// logging request
app.use((req, res, next) => {
  logging.info(
    NAMESPACE,
    `Method - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`
  );

  res.on("finish", () => {
    logging.info(
      NAMESPACE,
      `Method - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${req.statusCode}]`
    );
  });

  next();
});

// middleware
app.use(express.json());

// serving build folder
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

// ================================================================================
// api imports
const sampleRoute = require("./routes/sample");

app.use("/api/sample", sampleRoute);
// ================================================================================

// error handling
app.use((req, res) => {
  const error = new Error("Path not found");
  res.status(400).json({
    message: error.message,
  });
});

// redirect to index
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

// mongodb connection

// creating server
const httpServer = http.createServer(app);
httpServer.listen(config.server.port, () => {
  logging.info(
    NAMESPACE,
    `Server running on ${config.server.hostname}:${config.server.port}`
  );
});
