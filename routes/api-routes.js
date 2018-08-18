var express = require('express');
var router = express.Router();
var scrapedNewYorTimesInfo = require ("../app/storedArticlesApi.js");
var request = require('request');
var cheerio = require('cheerio');


router.get('/', function(req,res){
        res.render("index");
})

router.get('/article', function(req,res){
    var url = "https://www.nytimes.com/2018/08/15/us/politics/transgender-christine-hallquist-vermont.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=photo-spot-region&region=top-news&WT.nav=top-news"


    request(url, function(err, resp, body){
        // console.log(body);
        var $ = cheerio.load(body);
        var pTag = $('p');
        var thing = pTag.text();
       res.render("article" , { 
           data : thing
       });
    
    })
})




module.exports = router;

let thing;

hunter();
chance();



function hunter(thing){
    thing = "bobby";

}

function chance(){
    console.log(thing);
}