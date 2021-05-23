const express = require("express");
const auth = require("../../middlewares/auth");
const switchRoute = require("../../middlewares/switch").switchRoute("doctors");
const uploadCloud = require("../../config/cloudinary");
const { assign } = require("../../middlewares/assign");
const validate = require("../../middlewares/validate");
const { getValidation, deleteValidation, updateValidation, register } = require("../../validations/util.validation");
const { objectController } = require("../../controllers");
const { getObject, createObject, updateObject, deleteObject } = objectController;

const router = express.Router();

router
	.route("/:slug")
	.get(auth(), validate(getValidation), switchRoute, getObject)
	.post(validate(register), uploadCloud.single("avatar"), assign("avatar"), switchRoute, createObject)
	.put(auth(), validate(updateValidation), switchRoute, updateObject)
	.delete(auth(), validate(deleteValidation), switchRoute, deleteObject);

module.exports = router;
