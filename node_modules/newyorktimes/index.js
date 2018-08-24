// The New York Times API

var request = require('request');

function NewYorkTimes (k) {
  var keys = k;

  // Validates if the API keys are in the right format
  function validateKeys (keys) {
    var goodKeys = ['article_search', 'best_sellers', 'campaign_finance', 'community', 'congress', 'districts', 'event_listings', 'geo', 'most_popular', 'movie_reviews', 'real_estate', 'semantic', 'times_newswire', 'timestags'];
    for (var name in keys) {
      if (goodKeys.indexOf(name) === -1) {
        console.error(name + " isn't a valid key");
      }
    }
  }

  // Gets the right API key for a specific URL
  function getKey (url) {
    // URI part -> key name
    var uriPart = url.split('/')[4];
    var keyMapping = {
      'search': 'article_search',
      'books': 'best_sellers',
      'elections': 'campaign_finance',
      'community': 'community',
      'politics': url.split('/')[6] === 'districts' ? 'districts' : 'congress',
      'events': 'event_listings',
      'semantic': url.split('/')[6] === 'geocodes' ? 'geo' : 'semantic',
      'mostpopular': 'most_popular',
      'movies': 'movie_reviews',
      'real-estate': 'real_estate',
      'news': 'times_newswire',
      'suggest': 'timestags'
    };
    var keyName = keyMapping[uriPart];
    return process.env[keyName];
  }

  validateKeys(k);

  return {
    query: function (url, cb) {
      var key = getKey(url);
      var reqURL = url + '&api-key=' + key;
      request(reqURL, cb);
    }
  };
}

module.exports = NewYorkTimes;