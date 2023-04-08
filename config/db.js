const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_DATABASE_NAME,
//     password: process.env.DB_PASSWORD,
// }).then((result) => {
//     console.log("DB connected... result = ", result);
// }).catch((err) => {
//     console.log(err);
// });;

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }

    console.log('Connected to MySQL as id ' + connection.threadId);
});

module.exports = connection;

// module.exports = pool.promise();