const express = require("express");
const { getAnalysis } = require("../../controllers/analysis.controller");
const router = express.Router();

router.route("/").get(getAnalysis);

module.exports = router;
