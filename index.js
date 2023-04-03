require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());

app.use('/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
