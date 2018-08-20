$('.posting-button').on("click", function(){
    console.log("I have been pushed!");

    let postingArticleTitle = $('.postingArticleTitle').val();
    let postingArticleSnippet = $('.postingArticleSnippet').val();
    let postingArticleAuthor = $('.postingArticleAuthor').val();
    let postingArticleImg = $('.postingArticleImg').val();
    let postingArticleBody = $('.postArticleBody').val();
    
    let newUserArticleObj = {
        title : postingArticleTitle,
        snippet : "postingArticleSnippet",
        author : postingArticleAuthor,
        img : postingArticleImg,
        body : postingArticleBody
    }
    
    console.log(newUserArticleObj);

    $.post("/articles/add", newUserArticleObj, function(response){
        console.log(response);
    })

});