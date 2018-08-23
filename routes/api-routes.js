const express = require('express');
const request = require('request');
var cheerio = require('cheerio');
const router = express.Router();
var db = require("../models/index.js");
let obj;



router.get("/api/paradigm", function (req, res) {
    db.Article.findAll({})
        .then(function (response) {
            res.send(response);
        });
});

router.get('/', function (req, res) {
    db.Article.findAll()
        .then(function (response) {
            let x = response.length -1;
            let y = x - 1;
            let z = x - 2;

            let one = {
                id: response[x].id,
                title: response[x].title,
                author: response[x].author,
                img: response[x].img,
                body: response[x].body,
                snippet: response[x].snippet
            }
            let two = {
                id: response[y].id,
                title: response[y].title,
                author: response[y].author,
                img: response[y].img,
                body: response[y].body,
                snippet: response[y].snippet
            }
            let three = {
                id: response[z].id,
                title: response[z].title,
                author: response[z].author,
                img: response[z].img,
                body: response[z].body,
                snippet: response[z].snippet
            }
            res.render("index", { items: one, two, three });
        });
});

router.get('/posting', function (req, res) {
    res.render("posting");
});

router.get('/posts', function (req, res) {

    db.Article.findAll().then(function (data) {
        res.render("posts", { items: data });
    });
});

router.get('/bookmarks', function (req, res) {
    res.render("bookmarks");
});

router.get('/settings', function (req, res) {
    res.render("settings");
});

router.get('/userarticle', function (req, res) {
    res.render("userarticle");
});
router.get('/edit/:id', function (req, res) {

    db.Article.findAll({
        where: {
            id: req.params.id
        }
    })
        .then(function (dbArticle) {
            console.log(dbArticle[0].title);
            let dbArticleUsable = dbArticle[0];
            res.render("editArticle", { data: dbArticleUsable });
        });

});


router.get('/userarticle/:id', function (req, res) {

    db.Article.findAll({
        where: {
            id: req.params.id
        }
    })
        .then(function (dbArticle) {
            // console.log("Something happened on the backend");
            /* Need to set a new variable for the returned sequelize object because you can't
            use bracket notation in handlebars */
            let dbArticleUsable = dbArticle[0];
            res.render("userarticle", { data: dbArticleUsable });
        });

});


router.get('/article/:title', function (req, res) {

    request(obj.apiUrl, function (err, resp, body) {
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
        // console.log(allTheTags);

        for (let i = 0; i < allTheTags.length; i++) {
            if (allTheTags[i].length === 0) {
                // console.log(allTheTags[i] + "This tag sucks and is empty")
            } else {
                thing = allTheTags[i]
                sendingInfo(thing);
            }

        }

        function sendingInfo(thing) {
            res.render("article", { data: thing, obj });

        }

    });
});

router.post("/article", function (req, res) {
    obj = req.body;
});

router.post("/articles/add", function (req, res) {

    db.Article.create({
        title: req.body.title,
        author: req.body.author,
        img: req.body.img,
        body: req.body.body,
        snippet: req.body.snippet
    }).then(function (dbArticle) {
        res.send(dbArticle);
    })
});

router.delete("/article/delete/:id", function (req, res) {
    db.Article.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(function (dbPost) {
            res.json(dbPost);
        });
});

router.put("/article/update/:id", function (req, res) {
    console.log(req.body.body)
    db.Article.update(req.body,
        {
            where: {
                id: req.params.id
            }
        })
        .then(function (dbPost) {
            res.json(dbPost);
        });
});





module.exports = router;