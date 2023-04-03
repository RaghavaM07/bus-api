const asyncHandler = require('express-async-handler');

const getBookedSeats = asyncHandler(async (req, res) => {
	const { schedId } = req.body;
	// find bus in that schedule item and get seatCapacity of bus
	// find sum of all seats booked with schedId
	res.json({ capacity: 100, booked: 80 });
});

const newBooking = asyncHandler(async (req, res) => {
	const { schedId, seats } = req.body;
	const bookingObj = {
		schedId,
		seats,
		id: 1 // req.id 
	};
	// create booking
	res.json(bookingObj);
});

module.exports = { getBookedSeats, newBooking };
