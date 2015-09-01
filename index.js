"use strict"

// dependancies
var express = require('express');
var bodyParser = require('body-parser'); 
var methodOverride = require('method-override');

// create app
var app = express();
var path = require('path');


//config
app.use(express.static(__dirname +'/view'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());

app.set('port', (process.env.PORT || 5000));

// routes
app.get('', function (req, res) {
  res.sendFile(path.join(__dirname, '/view/index.html'));
  //res.sendFile('index.html');
});


// set up server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});