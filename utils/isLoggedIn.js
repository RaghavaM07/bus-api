const jwt = require('jsonwebtoken');

const isLoggedIn = async (req, res, next) => {
	const token = req.cookies.access_token;
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.id = decoded.id;
		next();
	} catch (err) {
		res.status(401).json({ message: 'Invalid token' });
	}
}

module.exports = isLoggedIn;
