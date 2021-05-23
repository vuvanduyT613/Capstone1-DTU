const nodemailer = require("nodemailer");
const config = require("../config/config");
const logger = require("../config/logger");

const transport = nodemailer.createTransport(config.email.smtp);

/* istanbul ignore next */
if (config.env !== "test") {
	transport
		.verify()
		.then(() => logger.info("Connected to email server"))
		.catch(() =>
			logger.warn("Unable to connect to email server. Make sure you have configured the SMTP options in .env")
		);
}

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} html
 * @returns {Promise}
 */
const sendEmail = async (to, subject, html) => {
	const msg = { from: config.email.from, to, subject, html: html };
	return await transport.sendMail(msg);
};

/**
 * Send reset password email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendResetPasswordEmail = async (to, token) => {
	const subject = "Reset password";
	// replace this url with the link to the reset password page of your front-end app
	const resetPasswordUrl = `http://localhost:${config.port}/api/auth/reset-password?token=${token}`;
	console.log(resetPasswordUrl);
	const html = `Dear ${to}
  <p> click on this link: <a href="${resetPasswordUrl}">${resetPasswordUrl}</></p>
  <p>If you did not request any password resets, then ignore this email.</p>`;

	const msg = { from: config.email.from, subject, to, html: html };
	await transport.sendMail(msg);
};

/**
 * Send verification email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendVerificationEmail = async (to, token) => {
	const subject = "Email Verification";
	// replace this url with the link to the email verification page of your front-end app
	const verificationEmailUrl = `${config.port}/api/verify-email?token=${token}`;
	const text = `Dear ${to},
To verify your email, click on this link: ${verificationEmailUrl}
If you did not create an account, then ignore this email.`;
	await sendEmail(to, subject, text);
};

module.exports = {
	transport,
	sendEmail,
	sendResetPasswordEmail,
	sendVerificationEmail,
};
