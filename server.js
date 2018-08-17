var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var path = require('path');
var methodOverride = require('method-override');
var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');


var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./routes/api-routes.js");

app.use(routes);


var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});