const router = require("express").Router();
const ctrl = require("../controller/sample.controller");

/* 
    sample api route
*/

router.get("/", ctrl.sample);

module.exports = router;
