module.exports.assign = (key) => async (req, res, next) => {
	console.log(req.body);
	req.body[key] = req.file ? req.file.path : req.body[key];
	next();
};
