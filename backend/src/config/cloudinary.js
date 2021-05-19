const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const config = require("../config/config");
const multer = require("multer");

cloudinary.config(config.cloudinary_option);

const storage = new CloudinaryStorage({
	cloudinary,
	allowedFormats: ["jpg", "png"],
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
