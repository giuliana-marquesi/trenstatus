var express = require('express');
var cors = require('cors');
var Twitter = require('twitter');
var dotenv = require('dotenv');
var _ = require('underscore');

dotenv.load();

var port = process.env.PORT || 8080;
var app = express();

var corsOptions = {
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// https://dev.twitter.com/streaming/overview/request-parameters
var queries = [
  "@CPTM_oficial",
  "@CPTM_oficial #Informação",
  "@CPTM_oficial #L1",
  "@CPTM_oficial #L2",
  "@CPTM_oficial #L3",
  "@CPTM_oficial #L4",
  "@CPTM_oficial #L5",
  "@CPTM_oficial #L7",
  "@CPTM_oficial #L8",
  "@CPTM_oficial #L9",
  "@CPTM_oficial #L10",
  "@CPTM_oficial #L11",
  "@CPTM_oficial #L12",
  "@CPTM_oficial linha*",
  "@CPTM_oficial estação",
  "#CPTM",
  "@metrosp_oficial linha*",
  "@metrosp_oficial estação",
  "#metrosp",
  "@DiariodaCPTM linha*",
  "@DiariodaCPTM estação",
  "@Linha9_CPTM",
  "@cptm linha*",
  "@Linha4Amarela",
  "@Linha4_Amarela",
  "@Linha1Azul",
  "@Linha1_Azul",
  "@Linha2Verde",
  "@Linha2_Verde",
  "@Linha5Lilas",
  "@Linha5_Lilas",
  "@LilasLinha5",
  "@Linha3Verde",
  "@Linha3_Verde",
  "@Linha7RubiGD",
  "@Linha7_CPTM",
  "@Linha8Diamante",
  "@Linha8_CPTM",
  "@Linha9Esmeralda",
  "@Linha9_CPTM",
  "@Linha10TurqueGD",
  "@Linha10CPTM",
  "@Linha10_CPTM",
  "@Linha11Coral",
  "@Linha11_CPTM",
  "@Linha12SafiraGD",
  "@Linha12_CPTM",
];

var lines = [
  "Azul",
  "Vermelha",
  "Amarela",
  "Lilas",
  "Verde"
];
var queryString = queries.join(", ");

var insertIndex = 0;
var popIndex = 0;
var QUEUE_SIZE = 64;
var mQueue = [
  "Unhappily submitting to the Machine destroys your soul not all at once but over time"
];

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

client.stream('statuses/filter', {track: queryString, language: "pt"}, function(stream){
  stream.on('data', function(tweet) {
    //var mText = tweet.text.replace(/RT /g, "");
    //mText = mText.replace(/["{}<>().!,;|\-]/g, "");
    //mText = mText.replace(/[#@]\S+/g, "");
    //mText = mText.replace(/http(s?):\/\/\S+/g, "");
    //mText = mText.replace(/([a-zA-Z]+)\/([a-zA-Z]+)/g, "$1 $2");
    //mText = mText.replace(/\S+…/g, "");
    //mText = mText.replace(/\s+/g, " ");
    //mText = mText.trim();

    if(mText.length > 0) {
      console.log(mText);
      if(mQueue.length < QUEUE_SIZE) {
        mQueue.push(mText);
      } else {
        mQueue[insertIndex] = mText;
        insertIndex = (insertIndex + 1)%mQueue.length;
      }
    }
  });

  stream.on('error', function(error) {
    console.log("entrou no erro");
    console.log(error);
  });
});

app.get('/AFT', function(req, res) {
  res.send(mQueue[popIndex]);
  popIndex = (popIndex + 1)%mQueue.length;
});

app.get('/AFTALL', function(req, res) {
  var queueString = "";
  for(var i=0; i<mQueue.length; i++) {
    queueString += mQueue[i]+",<br>";
  }
  res.send(queueString);
});

app.listen(port);
