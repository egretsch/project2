var express = require("express");
var app = express();
var session = require('express-session')
var PORT = process.env.PORT || 8080;
var bodyParser = require("body-parser");
var db = require("./models");
var path = require('path');
// Set Handlebars.
var exphbs = require("express-handlebars");
var methodOverride = require('method-override');
let routes = require('./controllers/loggedin_controller.js');
var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');
let cors = require('cors');

var apiRoutes = require("./routes/api-routes.js");

app.use(cors());
app.use(session({
  secret: process.env.SESSIONSECRET || 'cat',
  resave: false,
  saveUninitialized: true
}));

function userSetup(req, res, next) {
  if (!req.session.user) {
    req.session.user = {};
    req.session.user.loggedIn = false;
  }
  next()
}
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userSetup);
app.set("view engine", "handlebars");
app.use(routes);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.use(apiRoutes);

db.sequelize.sync().then(function(){
  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
