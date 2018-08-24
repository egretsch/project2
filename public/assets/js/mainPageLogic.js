




// console.log("test");
function nytArticles() {
    let url = "https://api.nytimes.com/svc/mostpopular/v2/mostshared/all-sections/1.json";
    url += '?' + $.param({
        'api-key': "6086b5c73aa24707a614e2ff573a60f9"
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        // console.log(result);
        for (let i = 0; i < result.results.length; i++) {
            if (i > 11) {
                //     capture(result, i, $("#sectionOne"));
                // } else if (i === 1) {
                //     capture(result, i, $("#sectionTwo"));
                // } else if (i === 2) {
                //     capture(result, i, $("#sectionThree"));
                // } else if (i >= 3 && i < 10) {
                capture(result, i, $("#nytStuffTest"));
            } else {
                capture(result, i, $("#nytStuff"));
            }
        }
        console.log(result);
    }).fail(function (err) {
        throw err;
    });
};

nytArticles();

function capture(result, i, location) {
    let imgArticle = result.results[i].media[0]["media-metadata"][2].url;
    let title = result.results[i].title;
    let about = result.results[i].abstract;
    let author = result.results[i].byline;
    let apiUrl = result.results[i].url;


    let div = $("<a id='articleLink' class='hoverable' href='/article/" + title + "'>");
    div.append("<h5 class='nytTitle'>" + title + "</h5>");
    div.append("<img class='nytImage' src=" + imgArticle + ">");
    div.append("<p class='nytText'>" + about + "</p>");
    div.append("<p class='nytAuthor'>" + author + "</p>");

    location.append(div);

    $(div).on("click", function () {
        console.log(title);

        let newArticle = {
            image: imgArticle,
            title: title,
            about: about,
            author: author,
            apiUrl: apiUrl
        };

        console.log(newArticle);

        $.post("/article", newArticle, function (data) {
            console.log(data);
        });

    });

};