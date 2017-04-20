var express = require('express');
var cors = require('cors');
var Twitter = require('twitter');
var dotenv = require('dotenv');

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
  "@CPTM_oficial #Informação",
  "#CPTM",
  "@metrosp_oficial",
  "#metrosp",
  "@DiariodaCPTM",
  "#cptm",
  "#L1",
  "#L2",
  "metro"
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
    var mText = tweet.text.replace(/RT /g, "");
    mText = mText.replace(/["{}<>().!,;|\-]/g, "");
    mText = mText.replace(/[#@]\S+/g, "");
    mText = mText.replace(/http(s?):\/\/\S+/g, "");
    mText = mText.replace(/b\/c/g, "because");
    mText = mText.replace(/([a-zA-Z]+)\/([a-zA-Z]+)/g, "$1 $2");
    mText = mText.replace(/\S+…/g, "");
    mText = mText.replace(/\s+/g, " ");
    mText = mText.trim();

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
