const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const appointmentModel = require("../models/appointments/appointment.model");

const getAnalysis = catchAsync(async (req, res) => {
	const result = await appointmentModel.aggregate([
		{
			$group: {
				_id: { $month: "$createdAt" },
				numberofdocuments: { $sum: 1 },
			},
		},
		{
			$project: {
				_id: false,
				month: {
					$arrayElemAt: [
						[
							"",
							"January",
							"February",
							"March",
							"April",
							"May",
							"June",
							"July",
							"August",
							"September",
							"October",
							"November",
							"December",
						],
						"$_id",
					],
				},
				numberofdocuments: true,
			},
		},
	]);
	res.status(httpStatus.CREATED).send({ result });
});

module.exports = {
	getAnalysis,
};
