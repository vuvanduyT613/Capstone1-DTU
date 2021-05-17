module.exports.switchRoute = (redirect) => async (req, res, next) => {
  res.locals.redirect = redirect;
  return next();
};
