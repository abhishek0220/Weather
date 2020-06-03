const express = require('express');
const request = require('request');
const app = express()
const bodyParser = require('body-parser');

var index_controller = require('./controller/index_controller')

require('dotenv').config();
app.set('view engine','ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

index_controller(app, request);

app.listen(3000, function(){
  console.log('Example app listening on port 3000')
})
