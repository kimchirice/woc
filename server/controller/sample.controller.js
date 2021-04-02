const logging = require("../config/logging");

/* 
    sample controller 
*/
const NAMESPACE = "SampleController";

// sample route on /api/sample/aa
module.exports.sample = (req, res) => {
    logging.info(NAMESPACE, "Sameple Route OK");
    return res.status(200).json({ message: "Hallo" });
};
