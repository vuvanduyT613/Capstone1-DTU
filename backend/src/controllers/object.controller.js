const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const pick = require("../utils/pick");
const pickSearch = require("../utils/pickSearch");
const catchAsync = require("../utils/catchAsync");
const { handlerObject } = require("../utils/switchModel");
const { objectService, tokenService } = require("../services");
const { create, query, getById, updateById, deleteById } = objectService;

const createObject = catchAsync(async (req, res) => {
	console.log(req.body);
	const result = await handlerObject(res.locals.redirect, req.params.slug, create, { body: req.body });
	const tokens = res.locals.redirect === "appointments" ? "null" : await tokenService.generateAuthTokens(result);
	res.status(httpStatus.CREATED).send({ result, tokens });
});

const getObject = catchAsync(async (req, res) => {
	const filter = req.query.userID ? pick(req.query, ["userID"]) : pickSearch(req.query, ["userName", "specialize"]);
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
