const express = require('express');
const request = require('request');
var cheerio = require('cheerio');
const router = express.Router();

let url;


router.get('/', function(req,res){
        res.render("index");
})

router.get('/article', function(req,res){


    
    request(url, function(err, resp, body){
        let $ = cheerio.load(body);
        let pTag = $('p');
        let thing = pTag.text();
    
        console.log(thing);

        res.render("article", {data: thing});

    });
});

router.post("/article", function(req, res){
    
   url = req.body.apiUrl;

//    console.log(obj);

});


router.get("/hunter", function(req, res){
    
})




module.exports = router;