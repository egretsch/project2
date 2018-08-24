var express = require("express");
var session = require('express-session')
var app = express();
var bodyParser = require("body-parser");
var db = require("./models");
let cors = require('cors');
// Set Handlebars.
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8080;
// let userRoutes = require('./controllers/loggedin_controller.js');
let articleRoutes = require('./routes/api-routes.js');



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors());
// app.use(userSetup);
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// app.use(userRoutes);
app.use(articleRoutes);
// app.use(session({
//   secret: process.env.SESSIONSECRET || 'cat',
//   resave: false,
//   saveUninitialized: true
// }));

// function userSetup(req, res, next) {
//   if (!req.session.user) {
//     req.session.user = {};
//     req.session.user = flase;
//   }
//   next()
// }




// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
