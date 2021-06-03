const express = require("express");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const mailRoute = require("./nodemailer.route");
const docsRoute = require("./docs.route");
const doctorRoute = require("./doctor.route");
const officeRoute = require("./office.route");
const appointmentRoute = require("./appointment.route");
const clinic = require("./clinic.route");
const analysis = require("./analysis.route");
const chatRoute = require("./chat.route");
const config = require("../../config/config");

const router = express.Router();

const defaultRoutes = [
	{
		path: "/auth",
		route: authRoute,
	},
	{
		path: "/users",
		route: userRoute,
	},
	{
		path: "/nodemail",
		route: mailRoute,
	},
	{
		path: "/doctors",
		route: doctorRoute,
	},
	{
		path: "/offices",
		route: officeRoute,
	},
	{
		path: "/appointments",
		route: appointmentRoute,
	},
	{
		path: "/clinics",
		route: clinic,
	},
	{
		path: "/analysis",
		route: analysis,
	},
	{
		path: "/chats",
		route: chatRoute,
	},
];

// routes available only in development mode
const devRoutes = [
	{
		path: "/docs",
		route: docsRoute,
	},
];

defaultRoutes.forEach((route) => {
	router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === "development") {
	devRoutes.forEach((route) => {
		router.use(route.path, route.route);
	});
}

module.exports = router;
