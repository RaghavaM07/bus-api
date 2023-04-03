const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
	const { username, password, name } = req.body;
	// create user
	res.json({ username, name, password });
}));

module.exports = router;