var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var db = require("./models");
var exphbs = require("express-handlebars");
var methodOverride = require('method-override');
// let articleRoutes = require('./routes/api-routes.js');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// app.use(articleRoutes);

require('./routes/api-routes.js')(app);

var PORT = process.env.PORT || 8080;
// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
