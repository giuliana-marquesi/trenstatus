var express = require('express');
var cors = require('cors');
var dotenv = require('dotenv');
var Client = require('pg').Client;
var _ = require('underscore');

dotenv.load();


var client = new Client(process.env.DATABASE_URL);
var linhas = ['azul', 'verde', 'vermelha', 'amarela', 'lilas', 'rubi', 'diamante', 'esmeralda', 'turquesa', 'coral', 'safira', 'prata'];
var query;
var rows = [];


var port = process.env.PORT || 8080;
var app = express();

var corsOptions = {
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200
};

client.connect();
app.use(cors(corsOptions));

app.get('/db', function (request, response) {
  var resultado_acumulado = '';
  _.each(linhas, function(nome_linha) {
    query = client.query('SELECT * FROM (SELECT DISTINCT ON (frase) data_postagem, frase, linha FROM tuites WHERE linha=$1 LIMIT 30) q ORDER BY data_postagem DESC'
, [nome_linha]);

    query.on('row', function(row) {
      rows.push(row);
    });
  });
  response.send(rows);
});

app.listen(port);
