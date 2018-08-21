$(".posts-articles-individual").on('click', function(){
   let postsUserArticleId = $(this).attr('data');


   

   $.get('/userarticles/' + postsUserArticleId, function(req, res){
       console.log("I sent something possibly");
   })
})