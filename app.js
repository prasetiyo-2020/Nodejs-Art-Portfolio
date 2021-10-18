const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false
}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'art'
});

app.get('/', (req, res) => {
    connection.query(
        'SELECT * FROM manipulations',
        (error, results) => {
            // Teruskan object sebagai argument ke-2 res.render
            res.render('list.ejs', {
                manipulations: results
            });
        }
    );
});


app.listen(process.env.PORT || 3000);