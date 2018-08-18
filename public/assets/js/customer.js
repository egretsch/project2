//Variables--------------------------------------------------------------
var url = "https://api.nytimes.com/svc/mostpopular/v2/mostshared/Technology/7.json";
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
  function nytArticles() {
    var url = "https://api.nytimes.com/svc/mostpopular/v2/mostshared/all-sections/30.json";
    url += '?' + $.param({
      'api-key': "6086b5c73aa24707a614e2ff573a60f9"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function (result) {
      console.log(result);
      for (let i = 0; i < result.results.length; i++) {
        capture(result, i);
      }
    }).fail(function (err) {
      throw err;
    });
  };


  nytArticles();

  function capture(result, i) {
    let imgArticle = result.results[i].media[0]["media-metadata"][2].url;
    let title = result.results[i].title;
    let about = result.results[i].abstract;
    let author = result.results[i].byline;
    let apiUrl = result.results[i].url;
    let div = $("<div>").attr("id", "nyWrapper nyIWrapper" + [i]);


    $(div).append("<img src=" + imgArticle + ">");
    $(div).append("<h5>" + title + "</h5>");
    $(div).append("<p>" + about + "</p>");
    $(div).append("<p>" + author + "</p>");
    $(div).attr('src', 'article');

    $("#nytStuff").append(div);
  };
}


$("nyWrapper").on('click', function () {
  
})








// $('.articleWrapper').on('click', function(){
//   $.ajax({
//     url: url,
//     method: 'GET',
//   }).done(function(result) {


//     let apiUrl = result.results[1].url;

//     $.post({url: "/articlesUrl", traditional: true}, apiUrl, function (data) {


//   });


//   }).fail(function(err) {
//     throw err;
//   });




// })



