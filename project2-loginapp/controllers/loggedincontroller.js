var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var db= require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    
    console.log(res);
    res.render("index", {});
  

});

router.get("/logedin", function (req, res) {

    console.log(res);
    res.render("logedin", {});


});

router.get("/createuser", function (req, res) {

    console.log(res);
    res.render("createuser", {});


});

// Export routes for server.js to use.
module.exports = router;