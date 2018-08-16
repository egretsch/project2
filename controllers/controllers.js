var express = require('express');
var router = express.Router();
// var customer = require('../models/customer.js');

router.get('/', function(req,res){
        res.render("index");
})


module.exports = router;