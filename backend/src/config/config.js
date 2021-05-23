const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");
//cdsadasddads
dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVarsSchema = Joi.object()
	.keys({
		NODE_ENV: Joi.string().valid("production", "development", "test").required(),
		PORT: Joi.number().default(3000),
		MONGODB_URL: Joi.string().required().description("Mongo DB url"),
		JWT_SECRET: Joi.string().required().description("JWT secret key"),
		JWT_ACCESS_EXPIRATION_MINUTES: Joi.number().default(30).description("minutes after which access tokens expire"),
		JWT_REFRESH_EXPIRATION_DAYS: Joi.number().default(30).description("days after which refresh tokens expire"),
		JWT_RESET_PASSWORD_EXPIRATION_MINUTES: Joi.number()
			.default(10)
			.description("minutes after which reset password token expires"),
		JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: Joi.number()
			.default(10)
			.description("minutes after which verify email token expires"),
		SMTP_HOST: Joi.string().description("server that will send the emails"),
		SMTP_PORT: Joi.number().description("port to connect to the email server"),
		SMTP_USERNAME: Joi.string().description("username for email server"),
		SMTP_PASSWORD: Joi.string().description("password for email server"),
		EMAIL_FROM: Joi.string().description("the from field in the emails sent by the app"),
		CD_CLOUD_NAME: Joi.string().description("the from field in the cloudinary"),
		CD_API_KEY: Joi.string().description("the from field in the cloudinary key"),
		CD_API_SECRET: Joi.string().description("the from field in the cloudinary secret"),
		CD_API_CLOUDINARY_URL: Joi.string().description("the from field in the cloudinary"),
	})
	.unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: "key" } }).validate(process.env);

if (error) {
	throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
	env: envVars.NODE_ENV,
	port: envVars.PORT,
	mongoose: {
		url: envVars.MONGODB_URL + (envVars.NODE_ENV === "test" ? "-test" : ""),
		options: {
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	},
	jwt: {
		secret: envVars.JWT_SECRET,
		accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
		refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
		resetPasswordExpirationMinutes: envVars.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
		verifyEmailExpirationMinutes: envVars.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
	},
	email: {
		smtp: {
			host: envVars.SMTP_HOST,
			port: envVars.SMTP_PORT,
			tls: {
				rejectUnauthorized: true,
			},
			auth: {
				user: envVars.SMTP_USERNAME,
				pass: envVars.SMTP_PASSWORD,
			},
		},
		from: envVars.EMAIL_FROM,
	},
	cloudinary_option: {
		cloud_name: envVars.CD_CLOUD_NAME,
		api_key: envVars.CD_API_KEY,
		api_secret: envVars.CD_API_SECRET,
	},
};
