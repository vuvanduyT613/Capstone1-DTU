/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string[]} keys
 * @returns {Object}
 */
const pick = (object, keys) => {
	return keys.reduce((obj, key) => {
		if (object && Object.prototype.hasOwnProperty.call(object, key)) {
			// eslint-disable-next-line no-param-reassign
			key.length > 0 && key !== " " ? (obj[key] = { $regex: object[key], $options: "i" }) : {};
		}
		return obj;
	}, {});
};

module.exports = pick;
