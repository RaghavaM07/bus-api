const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const login = asyncHandler(async (req, res) => {
	const { username, password } = req.body;

	// Get user details by username
	const user = await User.findByUsername(username);
	console.log(user);

	// Check password
	if (user.password === password) {
		const userObj = {
			id: user.id
		};
		const token = jwt.sign(userObj, process.env.JWT_SECRET);
		res.cookie('access_token', token, {
			httpOnly: true,
			expires: new Date(253402300799999)	// expires on 31-12-9999
		});
		return res.status(200).json({ message: 'Login Success' });
	} else {
		res.status(401).json({ message: 'Login Failed' });
	}
});

const logout = (req, res) => {
	const token = req.cookies['access_token'];
	if (token) res.clearCookie('access_token');
	return res.status(200).json({ message: 'Log out Success' });
};

module.exports = { login, logout };
