<<<<<<< HEAD
$(".posts-articles-individual").on('click', function(){
   let postsUserArticleId = $(this).attr('data');
   window.location.href = "/userarticle/" + postsUserArticleId;
   console.log(postsUserArticleId);

   $.get('/userarticle' + postsUserArticleId, function(req, res){
       console.log("I sent something possibly");
   })
=======
$(".posts-articles-individual").on('click', function () {
    let postsUserArticleId = $(this).attr('data');
    window.location.href = "/userarticle/" + postsUserArticleId;

    console.log(postsUserArticleId);

    $.get('/userarticle' + postsUserArticleId, function (req, res) {
        console.log("I sent something possibly");
    })
>>>>>>> 3ebe50734b603e9380fa4a4479dc9f32c225f4c7
})