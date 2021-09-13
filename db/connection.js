const mysql = require('mysql2');

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        // Your MySQL password
        password: 'Blopez@811',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;