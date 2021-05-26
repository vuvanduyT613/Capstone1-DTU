const {
	Doctor,
	DoctorSpecizalization,
	Specizalization,
	HospitalAffiliation,
	Qualification,
	Appointment,
	AppointmentStatus,
	Booking,
	Office,
	NetworkInsurance,
	OfficeDoctor,
	ChatRoom,
	Message,
} = require("../models");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");

const switchModel = (action) => {
	switch (action) {
		case `Doctor`:
			return Doctor;

		case `DoctorSpecizalization`:
			return DoctorSpecizalization;

		case `Specizalization`:
			return Specizalization;

		case `HospitalAffiliation`:
			return HospitalAffiliation;

		case `Qualification`:
			return Qualification;

		case `Appointment`:
			return Appointment;

		case `AppointmentStatus`:
			return AppointmentStatus;

		case `Booking`:
			return Booking;

		case `Office`:
			return Office;

		case `NetworkInsurance`:
			return NetworkInsurance;

		case `OfficeDoctor`:
			return OfficeDoctor;

		case `ChatRoom`:
			return ChatRoom;

		case `Message`:
			return Message;
	}
};

const validateRoute = (to) => {
	const arr = [
		`doctor-specizalization`,
		`specizalization`,
		`hospital`,
		`qualification`,
		`v1`,
		`network-insurance`,
		`office-doctor`,
		`appointment-status`,
		`booking`,
		`chat-room`,
		`message`,
	];
	return arr.indexOf(to);
};

const handlerObject = (before, to, action, option) => {
	if (validateRoute(to ? to : ``) !== -1 && before === "doctors") {
		switch (to) {
			case `doctor-specizalization`:
				return action(`DoctorSpecizalization`, option);
			case `specizalization`:
				return action(`Specizalization`, option);
			case `hospital`:
				return action(`HospitalAffilia tion`, option);
			case `qualification`:
				return action(`Qualification`, option);
			case `v1`:
				return action(`Doctor`, option);
		}
	}
	if (validateRoute(to ? to : ``) !== -1 && before === "offices") {
		switch (to) {
			case `network-insurance`:
				return action(`NetworkInsurance`, option);
			case `office-doctor`:
				return action(`OfficeDoctor`, option);
			case `v1`:
				return action(`Office`, option);
		}
	}
	if (validateRoute(to ? to : ``) !== -1 && before === "appointments") {
		switch (to) {
			case `appointment-status`:
				return action(`AppointmentStatus`, option);
			case `booking`:
				return action(`Booking`, option);
			case `v1`:
				return action(`Appointment`, option);
		}
	}
	if (validateRoute(to ? to : ``) !== -1 && before === "chats") {
		switch (to) {
			case `chat-room`:
				return action(`ChatRoom`, option);
			case `message`:
				return action(`Message`, option);
			case `v1`:
				return action(`Doctor`, option);
		}
	}
	throw new ApiError(httpStatus.NOT_FOUND, "Not Found");
};

module.exports = {
	switchModel,
	handlerObject,
};
