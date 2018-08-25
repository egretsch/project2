require("dotenv").config();
const request = require('request');
var db = require("../models");
var cheerio = require('cheerio');
let keys = require("../keys.js");
var bcrypt = require('bcrypt');

let obj;

module.exports = function (app) {

  app.get("/api/paradigm", function (req, res) {
    db.Article.findAll({})
      .then(function (response) {
        res.send(response);
      });
  });

  app.get('/', function (req, res) {
    db.Article.findAll()
      .then(function (response) {
        if (response.length > 2) {
          let spacerArticles = [];

          for (let j = 0; j < response.length - 3; j++) {
            let spacer = {
              id: response[j].id,
              title: response[j].title,
              author: response[j].author,
              img: response[j].img,
              body: response[j].body,
              snippet: response[j].snippet
            }
            spacerArticles.push(spacer);
          }

          let x = response.length - 1;
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


          request.get({
            url: "https://api.nytimes.com/svc/mostpopular/v2/mostshared/all-sections/7.json",
            qs: {
              'api-key': keys.most_popular
            },
          }, function (err, response, body) {
            body = JSON.parse(body);
            let arr = [];
            let arrTwo = []
            for (let i = 0; i < body.results.length; i++) {
              let capture = {
                url: body.results[i].url,
                title: body.results[i].title,
                author: body.results[i].byline,
                img: body.results[i].media[0]["media-metadata"][2].url,
                snippet: body.results[i].abstract
              };
              if (i < 11) {
                arr.push(capture);
              } else {
                arrTwo.push(capture);
              }
              // console.log(arr);
            };

            // console.log(arr);
            // console.log(arrTwo);
            res.render("index", { items: one, two, three, arr, arrTwo, spacerArticles });
          });
        } else {
          request.get({
            url: "https://api.nytimes.com/svc/mostpopular/v2/mostshared/all-sections/7.json",
            qs: {
              'api-key': keys.most_popular
            },
          }, function (err, response, body) {
            body = JSON.parse(body);
            let arr = [];
            let arrTwo = []
            for (let i = 0; i < body.results.length; i++) {
              let capture = {
                url: body.results[i].url,
                title: body.results[i].title,
                author: body.results[i].byline,
                img: body.results[i].media[0]["media-metadata"][2].url,
                snippet: body.results[i].abstract
              };
              if (i < 11) {
                arr.push(capture);
              } else {
                arrTwo.push(capture);
              }
            };
            res.render("index", { items: obj, arr, arrTwo });
          });
        }
      });
  });

  app.get('/posting', function (req, res) {
    res.render("posting");
  });

  app.get('/posts/:id', function (req, res) {
    db.Article.findAll({
      where: {
        UserInfoId: req.params.id
      }
    }).then(function (data) {


      res.render("posts", { items: data });
    });
  });

  app.get('/bookmarks/:id', function (req, res) {
    console.log(req.body.currentURL);
    db.Bookmark.findAll({
      where: {
        UserInfoId: req.params.id
      }
    }).then(function (data) {


      res.render("bookmarks", { items: data });
    });
  });

  app.post('/bookmarks', function (req, res) {
    let UserInfoIdReturned = parseInt(req.body.localStoragePosts);
    let parsedUserId = req.body.currentURL.split('/')[4];
    let link = req.body.currentURL;
    console.log(parsedUserId);
    db.Article.findOne({
      where: {
        id: parsedUserId
      }
    }).then(function (data) {

      db.Bookmark.create({
        title: data.title,
        author: data.author,
        img: data.img,
        snippet: data.snippet,
        UserInfoId: UserInfoIdReturned,
        link: link
      });
    });
  });

  app.get('/userarticle', function (req, res) {
    res.render("userarticle");
  });

  app.get('/edit/:id', function (req, res) {

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

  app.get('/userarticle/:id', function (req, res) {
    db.Article.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbArticle) {
        /* Need to set a new variable for the returned sequelize object because you can't
        use bracket notation in handlebars */
        let dbArticleUsable = dbArticle[0];
        res.render("userarticle", { data: dbArticleUsable });
      });

  });

  app.post("/article", function (req, res) {
    console.log(req.body);
    obj = req.body;
  });

  app.get('/article/:title', function (req, res) {
    // console.log(req.body);
    // res.send(req.body);
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

  app.post("/articles/add", function (req, res) {

    db.Article.create({
      title: req.body.title,
      author: req.body.author,
      img: req.body.img,
      body: req.body.body,
      snippet: req.body.snippet,
      UserInfoId: req.body.UserInfoId

    }).then(function (dbArticle) {
      res.send(dbArticle);
    })
  });

  app.delete("/article/delete/:id", function (req, res) {
    db.Article.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  app.delete("/bookmarks/delete/:id", function (req, res) {
    db.Bookmark.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });


  app.put("/article/update/:id", function (req, res) {
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

  app.get('/usercreatepage', function (req, res) {
    res.render("usercreatepage");
  });

  app.get('/userloginpage', function (req, res) {
    res.render("userloginpage");
  });

  ////////////Ed and Tyler's Logic/////////////////////////////////////////////////////////////////////////////////

  // Create all our routes and set up logic within those routes where required.

  app.post("/api/addUser", function (req, res) {
    // console.log(req.body);

    const saltRounds = 10;
    const myPlaintextPassword = req.body.password;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
        req.body.password = hash;
        db.UserInfo.create(req.body).then(function (data) {
          res.json(data);
        });
      });

    });


  });



  app.post("/api/validate", function (req, res) {
    db.UserInfo.findOne({
      where: {
        email: req.body.email
      },
    }).then(function (data) {
      console.log(data.dataValues + "This is the datavalues");
      console.log(req.body.email + "This is the email");
      console.log(data.dataValues.email + "This is the email");
      console.log(data.dataValues.password + "This is the password");
      if (!data && typeof data === object) {
        res.status(404).send('Invalid username or password. Please try again');
      } else {
        bcrypt.compare(req.body.password, data.dataValues.password).then(function (bcryptRes) {
          // res == true

          if (!bcryptRes) {
            console.log("it worked1");
            res.status(404).send('Invalid username or password. Please try again');
          } else {
            console.log("it worked 2");

            var userObj = {
              id: data.dataValues.id,
              email: data.dataValues.email,
              first_name: data.dataValues.first_name,
              last_name: data.dataValues.last_name
            }
            console.log(userObj);
            // req.session.user.loggedIn = true;
            // req.session.user.currentUser = userObj;

            res.json(userObj);
          }
        });
      }

    });
  });

};