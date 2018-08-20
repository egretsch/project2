var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var db= require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    
    
    res.render("index", {});
  

});

router.get("/loggedin", function (req, res) {

    console.log(res);
    res.render("loggedin", {});


});

router.get("/createuser", function (req, res) {

        console.log(res);
    res.render("createuser", {});


});

router.post("/api/addUser", function (req, res) {
    console.log("=================================" + JSON.stringify(req.body) + "==========================");
    db.UserInfo.create(req.body).then(function (data) {
        res.json(data);
    });
});

router.post("/login", function (req, res) {
    db.UserInfo.findOne({
        where: {email: req.body.username}
    }).then(project => {
        console.log("******************************" +JSON.stringify(project))

     //   if project equals null, send to login failed page, else log them in
        if(!project) {
            console.log("\nLOGIN FAILED\n");

            //send to login failed page alert temporary
            
        }else{
            res.json(project);
            //send to application
        }

    })
});

// Export routes for server.js to use.
module.exports = router;

