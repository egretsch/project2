const express = require('express');
const request = require('request');
var cheerio = require('cheerio');
const router = express.Router();

let obj;


router.get('/', function(req,res){
        res.render("index");
})

router.get('/article', function(req,res){
    
    request(obj.apiUrl, function(err, resp, body){
        let $ = cheerio.load(body);
        let pTag = $('p');
        let thing = pTag.text();
    
        console.log(thing);

        res.render("article", {data: thing, obj});

    });
});

router.post("/article", function(req, res){
    
   obj = req.body;

});


router.get("/hunter", function(req, res){
    
});


module.exports = router;