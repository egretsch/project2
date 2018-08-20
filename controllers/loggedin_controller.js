var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var db= require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    
    // console.log(res);
    res.render("index", {});
  

});

router.get("/loggedin", function (req, res) {

    // console.log(res);
    res.render("loggedin", {});


});

router.get("/createuser", function (req, res) {

    // console.log(res);
    res.render("createuser", {});


});

router.post("/api/addUser", function (req, res) {
    // console.log(req.body);
    db.UserInfo.create(req.body).then(function (data) {
        res.json(data);
    });
    

});

router.post("/api/validate", function (req, res) {
    console.log(req.body.email);
    db.UserInfo.findOne({
        where: {
            email: req.body.email
        },
    }).then(function (data) {
        console.log(data.dataValues)
    });
});


// Export routes for server.js to use.
module.exports = router;

