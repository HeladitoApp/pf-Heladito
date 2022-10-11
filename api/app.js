var express = require('express');
var bodyParser= require('body-parser');

var server = express(); 


const routes = require('./routes/index')

server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());

//rutas base
server.use('/',routes);
module.exports=server;