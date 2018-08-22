var express = require("express");

var router = express.Router();
var bcrypt = require('bcrypt');
// Import the model to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/login", function (req, res) {

    // console.log(res);
    res.render("index", {});


});

router.get("/loggedin", function (req, res) {
    console.log(req.session)
    // console.log(res);
    if (req.session.user.loggedIn){
        return res.render("loggedin", {});
    } else {
        res.render("index", {})
        
    }

});

router.get("/createuser", function (req, res) {

    // console.log(res);
    res.render("createuser", {});


});

router.post("/api/addUser", function (req, res) {
    // console.log(req.body);

    const saltRounds = 10;
    const myPlaintextPassword = req.body.password
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
            req.body.password = hash;
            db.UserInfo.create(req.body).then(function (data) {
                res.json(data);
            });
        });

    });


});



router.post("/api/validate", function (req, res) {
    
    db.UserInfo.findOne({
        where: {
            email: req.body.email
        },
    }).then(function (data) {
        if (!data && typeof data === "object") {
            res.status(404).send('Invalid username or password. Please try again');
        } else {
            bcrypt.compare(req.body.password, data.dataValues.password).then(function (bcryptRes) {
                // res == true

                if (!bcryptRes) {
                    console.log("it worked1");
                    res.status(404).send('Invalid username or password. Please try again');
                } else {
                    console.log("it worked 2");
                    var userObj = {
                        id: data.dataValues.id,
                        email: data.dataValues.email,
                        first_name: data.dataValues.first_name,
                        last_name: data.dataValues.last_name
                    }
                    
                    req.session.user.loggedIn = true;
                    req.session.user.currentUser = userObj;
                    res.json(data)
                    // res.redirect("/loggedin");
                }
            });
        }

    });
});


module.exports = router;

