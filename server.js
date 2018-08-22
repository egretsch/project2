var express = require("express");
let cors = require('cors');
var session = require('express-session')
var app = express();
var bodyParser = require("body-parser");
var db = require("./models");

// Set Handlebars.
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8080;
let routes = require('./controllers/loggedin_controller.js');

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
app.use(bodyParser.json());
app.use(userSetup);
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
