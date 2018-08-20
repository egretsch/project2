const express = require('express');
const request = require('request');
var cheerio = require('cheerio');
const router = express.Router();
let obj;





router.get('/', function(req,res){
        res.render("index");
})

router.get('/posting', function(req,res){
    res.render("posting");
})

router.get('/posts', function(req,res){
    res.render("posts");
})

router.get('/bookmarks', function(req,res){
    res.render("bookmarks");
})

router.get('/settings', function(req,res){
    res.render("settings");
})

router.get('/article', function(req,res){
    
    request(obj.apiUrl, function(err, resp, body){
        let $ = cheerio.load(body);

        let tag1 = $('.e2kc3sl0');
        let tag1Text = tag1.text();

        let tag2 = $('.g-body');
        let tag2Text = tag2.text();

        let tag3 = $(".story-content");
        let tag3Text = tag3.text();
        let thing;

        let allTheTags = [];

        allTheTags.push(tag1Text);
        allTheTags.push(tag2Text);
        allTheTags.push(tag3Text);
        console.log(allTheTags);

        for (let i = 0; i < allTheTags.length; i++) {
            if(allTheTags[i].length === 0){
                console.log(allTheTags[i] + "This tag sucks and is empty")
            }else{
                thing = allTheTags[i]
                sendingInfo(thing);
            }
            
        }

        function sendingInfo(thing){
            res.render("article", {data: thing, obj});

        }


    });
});

router.post("/article", function(req, res){
 obj = req.body;
});





module.exports = router;