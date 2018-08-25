$('.posting-button').on("click", function(){
    console.log("I have been pushed!");

    let postingArticleTitle = $('.postingArticleTitle').val();
    let postingArticleSnippet = $('.postingArticleSnippet').val();
    let postingArticleAuthor = $('.postingArticleAuthor').val();
    let postingArticleImg = $('.postingArticleImg').val();
    let postingArticleBody = $('.postArticleBody').val();
<<<<<<< HEAD
=======
    let theCookie = localStorage.getItem("localThing");
>>>>>>> 3ebe50734b603e9380fa4a4479dc9f32c225f4c7
    
    let newUserArticleObj = {
        title : postingArticleTitle,
        snippet : postingArticleSnippet,
        author : postingArticleAuthor,
        img : postingArticleImg,
<<<<<<< HEAD
        body : postingArticleBody
    }
    
    console.log(newUserArticleObj);

    $.post("/articles/add", newUserArticleObj, function(response){
        console.log(response);
        window.location.href = "/posts";
=======
        body : postingArticleBody,
        UserInfoId: theCookie
    }
    
    console.log(newUserArticleObj);  
        

    $.post("/articles/add", newUserArticleObj, function(response){
        console.log(response);
>>>>>>> 3ebe50734b603e9380fa4a4479dc9f32c225f4c7
    });
});