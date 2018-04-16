var express = require('express');
var app = express();
const fs = require('fs');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const obj = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
app.get('/', function (req, res) {
  res.json(obj);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});