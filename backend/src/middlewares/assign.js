module.exports.assign = (key) => async (req, res, next) => {
	req.body[key] = req.file.path;
	next();
};
