const express = require("express");
const auth = require("../../middlewares/auth");
const switchRoute = require("../../middlewares/switch").switchRoute("appointments");
const validate = require("../../middlewares/validate");
const appointment = require("../../middlewares/checkAppoinment");
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
	.post(auth(), validate(createValidation), appointment.appointment(), switchRoute, createObject)
	.patch(auth(), /*validate(updateValidation)*/ switchRoute, updateObject)
	.delete(auth(), validate(deleteValidation), switchRoute, deleteObject);

module.exports = router;
