$(".posts-articles-individual").on('click', function () {
    let postsUserArticleId = $(this).attr('data');
    window.location.href = "/userarticle/" + postsUserArticleId;

    console.log(postsUserArticleId);

    $.get('/userarticle' + postsUserArticleId, function (req, res) {
        console.log("I sent something possibly");
    })
})


$(".posts-bookmarks-individual").on('click', function () {
    let postsUserArticleId = $(this).attr('data');
    window.location.href = postsUserArticleId;
})