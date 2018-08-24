
var assert = require("assert");
var env = require('node-env-file');
var nyt = require('..');

// Setup env
env(__dirname + '/../.env');

function objEqual (obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

describe('NewYorkTimes', function (){
  describe('keys', function (){
    it('should store keys', function (){
      var newnyt = nyt({
        article_search: process.env.article_search,
        best_sellers: process.env.best_sellers,
        campaign_finance: process.env.campaign_finance,
        community: process.env.community,
        congress: process.env.congress,
        districts: process.env.districts,
        event_listings: process.env.event_listings,
        geo: process.env.geo,
        most_popular: process.env.most_popular,
        movie_reviews: process.env.movie_reviews,
        real_estate: process.env.real_estate,
        semantic: process.env.semantic,
        times_newswire: process.env.times_newswire,
        timestags: process.env.timestags
      });
      assert(true);
    });
  });

  describe('api', function () {
    it('should query', function () {
      var newnyt = nyt({
        article_search: process.env.article_search
      });
      newnyt.query('http://api.nytimes.com/svc/semantic/v2/geocodes/query.json?country_code=US', function (json) {
        assert(json);
      });
    });
  });
});