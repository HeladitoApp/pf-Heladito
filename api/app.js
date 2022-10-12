var express = require("express");
var bodyParser = require("body-parser");
const morgan = require('morgan');
const cors = require('cors')

var server = express();

const routes = require("./src/routes/index");

server.use(morgan('tiny'))
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors)

//rutas base
server.use("/", routes);
module.exports = server;
