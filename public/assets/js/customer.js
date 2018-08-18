//Variables--------------------------------------------------------------
const request = require('request');
const cheerio = require('cheerio');
let url = "https://api.nytimes.com/svc/mostpopular/v2/mostshared/Technology/7.json";
url += '?' + $.param({
  'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"
});
//-----------------------------------------------------------------------

//When the document loads------------------------------------------------
$(document).ready(function () {
  $('.dropdown-trigger').dropdown();
  loadNewYorkTimes();
});
//------------------------------------------------------------------------



let loadNewYorkTimes = () => {
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function (result) {

    let imgArticle = result.results[1].media[0]["media-metadata"][2].url;
    let title = result.results[1].title;
    let about = result.results[1].abstract;
    let author = result.results[1].byline;
    let imgArticle = result.results[1].media[0];
    let apiUrl = result.results[1].url;

    // $('#articleHeader').html(title);
    // $("#articleImg").attr('src', imgArticle).attr('height', 300).attr('width', 400);
    // $('#about').html(about);
    // $('#author').html(author);

    articleScraper(apiUrl);

  }).fail(function (err) {
    throw err;
  });

}

$('.articleWrapper').on('click', function () {
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function (result) {


    let apiUrl = result.results[1].url;

    $.post({ url: "/articlesUrl", traditional: true }, apiUrl, function (data) {

    });

  }).fail(function (err) {
    throw err;
  });

})

// let articleScraper = (apiUrl) =>{

//   request(apiUrl, function(err, resp, body){
//     var $ = cheerio.load(body);
//     var pTag = $('p');
//     var thing = pTag.text();
//     console.log(thing);
// })

// }