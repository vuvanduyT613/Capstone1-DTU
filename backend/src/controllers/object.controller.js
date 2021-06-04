const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const pick = require("../utils/pick");
const pickSearch = require("../utils/pickSearch");
const catchAsync = require("../utils/catchAsync");
const { handlerObject } = require("../utils/switchModel");
const { objectService, tokenService } = require("../services");
const { create, query, getById, updateById, deleteById } = objectService;

const createObject = catchAsync(async (req, res) => {
	const result = await handlerObject(res.locals.redirect, req.params.slug, create, { body: req.body });
	if (res.locals.redirect === "doctors" && result !== null) {
		await handlerObject("clinics", req.params.slug, updateById, {
			id: req.body.idClinic,
			body: { idDoctor: result.id, avatar: result.avatar },
		});
	}
	const tokens =
		res.locals.redirect === "appointments" || res.locals.redirect === "clinics"
			? "null"
			: await tokenService.generateAuthTokens(result);
	res.status(httpStatus.CREATED).send({ result, tokens });
});

const getObject = catchAsync(async (req, res) => {
	const filter = req.query.userID
		? pick(req.query, ["userID"])
		: pickSearch(req.query, ["userName", "specialize", "nameClinic", "address", "city", "country"]);
	const options = pick(req.query, ["sortBy", "limit", "page"]);
	const result = req.query.id
		? await handlerObject(res.locals.redirect, req.params.slug, getById, { id: req.query.id })
		: await handlerObject(res.locals.redirect, req.params.slug, query, { filter, options });
	if (!result) {
		throw new ApiError(httpStatus.NOT_FOUND, "Not found");
	}
	res.status(httpStatus.CREATED).send(result);
});

const updateObject = catchAsync(async (req, res) => {
	const result = await handlerObject(res.locals.redirect, req.params.slug, updateById, {
		id: req.query.id,
		body: req.body,
	});
	if (!result) {
		throw new ApiError(httpStatus.NOT_FOUND, "Not found");
	}
	res.status(httpStatus.CREATED).send(result);
});

const deleteObject = catchAsync(async (req, res) => {
	const result = await handlerObject(res.locals.redirect, req.params.slug, deleteById, { id: req.query.id });
	if (!result) {
		throw new ApiError(httpStatus.NOT_FOUND, "Not found");
	}
	res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
	createObject,
	getObject,
	updateObject,
	deleteObject,
};
