const express = require('express');
const router = express.Router();
var scrapedNewYorTimesInfo = require ("../app/storedArticlesApi.js");

router.get('/', function(req,res){
        res.render("index");
})

router.get('/article', function(req,res){
    res.render("article");
})

router.get('/article/:article', function(req,res){
    res.render("index");
})

router.get('/api/articles', function (req, res){
    res.json(scrapedNewYorTimesInfo);
});

router.get('/articlesUrl', function (req, res){
    
    request(url, function(err, resp, body){
        let $ = cheerio.load(body);
        let pTag = $('p');
        let thing = pTag.text();
    
        console.log(thing);

    });

    router.post('/api/articles', function (req, res){
    
    });
});

module.exports = router;