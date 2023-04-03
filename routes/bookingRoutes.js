const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/', bookingController.newBooking);
router.get('/getBookedSeats', bookingController.getBookedSeats);

module.exports = router;