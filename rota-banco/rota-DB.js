var express = require('express');
var cors = require('cors');
var dotenv = require('dotenv');
var Client = require('pg').Client;

dotenv.load();

var client = new Client(process.env.DATABASE_URL);

var port = process.env.PORT || 8080;
var app = express();

var corsOptions = {
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200
};

client.connect();
app.use(cors(corsOptions));

app.get('/db', function (request, response) {
  client.query('SELECT linha, COUNT(*) AS qtddTuites FROM tuites GROUP BY linha', function(err, result) {
    if (err)
     { console.error(err); response.send("Error " + err); }
    else
     { response.send(result.rows); }
  });
});

app.listen(port);
