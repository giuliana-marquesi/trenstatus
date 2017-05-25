var express = require('express');
var cors = require('cors');
var dotenv = require('dotenv');
var pg = require('pg');

dotenv.load();

var port = process.env.PORT || 8080;
var app = express();

var corsOptions = {
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

pg.connect(process.env.DATABASE_URL, function(err, client, done) {
  app.get('/db', function (request, response) {
    client.query('SELECT * FROM tuites', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
});

app.listen(port);
