const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get('/getBuses', asyncHandler(async (req, res) => {
	const { from, to, date } = req.body;

	// Find route id
	// Find sched item with rid, date
	// Find details of those buses

	res.json({ from, to, date });
}));

module.exports = router;