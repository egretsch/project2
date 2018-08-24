// var express = require("express");

// var router = express.Router();
// var bcrypt = require('bcrypt');
// // Import the model to use its database functions.
// var db = require("../models");

// // Create all our routes and set up logic within those routes where required.
// // router.get("/", function (req, res) {

// //     // console.log(res);
// //     res.render("index", {});     *** I commented this out - Was conflicting with api routes "/" route.


// // });

// router.get("/loggedin", function (req, res) {

//     // console.log(res);
//     res.render("loggedin", {});


// });

// router.get("/createuser", function (req, res) {

//     // console.log(res);
//     res.render("createuser", {});


// });

// router.post("/api/addUser", function (req, res) {
//     // console.log(req.body);

//     const saltRounds = 10;
//     const myPlaintextPassword = req.body.password
//     bcrypt.genSalt(saltRounds, function (err, salt) {
//         bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
//             req.body.password = hash;
//             db.UserInfo.create(req.body).then(function (data) {
//                 res.json(data);
//             });
//         });

//     });


// });



// router.post("/api/validate", function (req, res) {
//     db.UserInfo.findOne({
//         where: {
//             email: req.body.email
//         },
//     }).then(function (data) {
//         console.log(data.dataValues);
//         console.log(req.body.email);
//         console.log();
//         console.log(data.dataValues.email);
//         console.log(data.dataValues.password);
//         if (!data && typeof data === object) {
//             res.status(404).send('Invalid username or password. Please try again');
//         } else {
//             bcrypt.compare(req.body.password, data.dataValues.password).then(function (bcryptRes) {
//                 // res == true

//                 if (!bcryptRes) {
//                     console.log("it worked1");
//                     res.status(404).send('Invalid username or password. Please try again');
//                     let wrongPassword = $('Invalid username or password. Please try again')
//                     $("#wrong").append(wrongPassword)
//                 } else {
//                     console.log("it worked 2");
//                     var userObj = {
//                         id: data.dataValues.id,
//                         email: data.dataValues.email,
//                         first_name: data.dataValues.first_name,
//                         last_name: data.dataValues.last_name
//                     }
//                     console.log(userObj)
//                     // req.session.user.loggedIn = true;
//                     // req.session.user.currentUser = userObj;
//                     res.json(data);
//                     res.redirect("/loggedin");
//                 }
//             });
//         }

//     });
// });

// // router.post("/login", function (req, res) {
// //     db.UserInfo.findOne({
// //         where: { email: req.body.email }
// //     }).then(project => {
// //         console.log("******************************" + JSON.stringify(project))

// //         //   if project equals null, send to login failed page, else log them in
// //         if (!project) {
// //             console.log("\nLOGIN FAILED\n");

// //             //send to login failed page alert temporary

// //         } else {
// //             res.json(project);
// //             //send to application
// //         }

// //     })
// // });



// // Export routes for server.js to use.
// module.exports = router;

