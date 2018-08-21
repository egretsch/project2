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
    }).fail(function (err) {
        throw err;
    });
};

nytArticles();