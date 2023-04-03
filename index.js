require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());

app.use('/auth', require('./routes/authRoutes'));
app.use('/sched', require('./routes/schedRoutes'));
app.use('/booking', require('./routes/bookingRoutes'));
app.use('/user', require('./routes/userRoutes'));

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
