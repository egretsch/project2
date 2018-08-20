var express = require("express");
// var routes = require('./routes');
var app = express();
var bodyParser = require("body-parser");
// var user = require('./routes/user');
var db = require("./models");


// var home = require('./routes/home');
// var application = require('./routes/application')
// Set Handlebars.
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8080;
let routes = require('./controllers/loggedincontroller.js')


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);






// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});