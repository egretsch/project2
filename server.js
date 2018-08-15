var express = require("express");
var routes = require('./routes');
var app = express();
var bodyParser = require("body-parser");
var user = require('./routes/user');
var db = require("./models");
var passport = require('passport');
var passportConfig = require('./config/passport')
var home = require('./routes/home');
var application = require('./routes/application')
// Set Handlebars.
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8080;



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);



require("./routes/html-routes.js")(app);
require("./routes/author-api-routes.js")(app);
require("./routes/post-api-routes.js")(app);


// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
