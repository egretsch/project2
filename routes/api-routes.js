var express = require('express');
var router = express.Router();
var scrapedNewYorTimesInfo = require ("../app/storedArticlesApi.js");

router.get('/', function(req,res){
        res.render("index");
})

router.get('/article', function(req,res){
    res.render("article");
})

router.get('/api/articles', function (req, res){
    res.json(scrapedNewYorTimesInfo);
});

router.get('/articlesUrl', function (req, res){
    
    request(url, function(err, resp, body){
        var $ = cheerio.load(body);
        var pTag = $('p');
        var thing = pTag.text();
    
        console.log(thing);
    
    
    })
  
    router.post('/api/articles', function (req, res){
    
    
    });
});



module.exports = router;