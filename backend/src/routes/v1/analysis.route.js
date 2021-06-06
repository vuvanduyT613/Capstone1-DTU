const express = require("express");
const { getAnalysis, getAnalysisDoctor } = require("../../controllers/analysis.controller");
const router = express.Router();

router.route("/").get(getAnalysis);
router.route("/doctor").get(getAnalysisDoctor);

module.exports = router;
