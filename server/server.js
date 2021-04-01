const http = require("http");
const express = require("express");
const logging = require("./config/logging");

/* 
    Server stuff
*/

const NAMESPACE = "SERVER";
const router = express();
const PORT = 8080;

// logging request
router.use((req, res, next) => {
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

// ================================================================================
// api imports
const sampleRoute = require("./routes/sample");

router.use("/api/sample", sampleRoute);
// ================================================================================

// error handling
router.use((req, res) => {
  const error = new Error("Path not found");
  res.status(400).json({
    message: error.message,
  });
});

// redirect

// mongodb connection

// creating server
const httpServer = http.createServer(router);
httpServer.listen(8080, () => {
  logging.info(NAMESPACE, `Server running on port ${PORT}`);
});
