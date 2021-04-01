const logging = require("../config/logging");

/* 
    sample controller 
*/
const NAMESPACE = "SampleController";

module.exports.sample = (req, res) => {
  logging.info(NAMESPACE, "Sameple Route");
  return res.status(200).json({ message: "Hallo" });
};
