console.log("test");

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

function capture(result, i){
    let imgArticle = result.results[i].media[0]["media-metadata"][2].url;
    let title = result.results[i].title;
    let about = result.results[i].abstract;
    let author = result.results[i].byline;
    let apiUrl = result.results[i].url;

    $("#nytStuff").append("<img src="+imgArticle+">");
    $("#nytStuff").append("<a href="++"><h5>"+title+"</h5></a>");
    $("#nytStuff").append("<p>"+about+"</p>");
    $("#nytStuff").append("<p>"+author+"</p>");
};
