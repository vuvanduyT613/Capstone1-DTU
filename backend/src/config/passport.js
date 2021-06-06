const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const config = require("./config");
const { tokenTypes } = require("./tokens");
const { User } = require("../models");
const { Doctor } = require("../models");

const jwtOptions = {
	secretOrKey: config.jwt.secret,
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
	try {
		if (payload.type !== tokenTypes.ACCESS) {
			throw new Error("Invalid token type");
		}
		const user = await User.findById(payload.sub);
		const doctor = await Doctor.findById(payload.sub);
		if (!user) {
			if (doctor) {
				done(null, doctor);
			} else {
				return done(null, false);
			}
		}
		done(null, user);
	} catch (error) {
		done(error, false);
	}
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
	jwtStrategy,
};
