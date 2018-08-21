const express = require('express');
const request = require('request');
var cheerio = require('cheerio');
const router = express.Router();
var db = require("../models/index.js");
let obj;


router.get('/', function(req,res){
        res.render("index");
});

router.get('/posting', function(req,res){
    res.render("posting");
});

router.get('/posts', function(req,res){

    db.Article.findAll().then(function(data){
        res.render("posts", {items: data});
    });
});

router.get('/bookmarks', function(req,res){
    res.render("bookmarks");
});

router.get('/settings', function(req,res){
    res.render("settings");
});
<<<<<<< HEAD
=======

router.get('/userarticle/:authorname/:articlename', function(req,res){

    db.Article.findAll({
        where: {
          authorname: req.params.author
        },
        where: {
            articlename: req.params.title
          }
      })
        .then(function(dbArticle) {
          res.send(dbArticle);
          res.render("userarticles");
        });
    
});

>>>>>>> 6842b08231fb992313b472ae2bd676f51e2b8a12

router.get('/article/:title', function(req,res){
    
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

router.post("/articles/add", function(req, res){

    db.Article.create({
        title: req.body.title,
        author: req.body.author,
        img: req.body.img,
        body: req.body.body,
        snippet: req.body.snippet
    }).then(function(dbArticle){
        res.send(dbArticle);
    })
});

router.delete("/article/delete/:id", function(req, res) {
    db.Article.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });





module.exports = router;