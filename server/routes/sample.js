const router = require("express").Router();
const ctrl = require("../controller/sample.controller");

/* 
    sample api route
*/

router.get("/aa", ctrl.sample);

module.exports = router;
