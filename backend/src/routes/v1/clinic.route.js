const express = require("express");
const auth = require("../../middlewares/auth");
const uploadCloud = require("../../config/cloudinary");
const { assign } = require("../../middlewares/assign");
const switchRoute = require("../../middlewares/switch").switchRoute("clinics");
const validate = require("../../middlewares/validate");
const {
	getValidation,
	deleteValidation,
	createValidation,
	updateValidation,
} = require("../../validations/util.validation");
const { objectController } = require("../../controllers");
const { getObject, createObject, updateObject, deleteObject } = objectController;

const router = express.Router();

router
	.route("/:slug")
	.get(auth(), validate(getValidation), switchRoute, getObject)
	.post(auth(), uploadCloud.single("image"), assign("image"), switchRoute, createObject)
	.patch(
		auth(),
		/*validate(updateValidation)*/ uploadCloud.single("image"),
		assign("image"),
		switchRoute,
		updateObject
	)
	.delete(auth(), validate(deleteValidation), switchRoute, deleteObject);

module.exports = router;
