$('#bookmarkThang').on('click', function(){
    let currentURL = window.location.href;
    let userInfoId = localStorage.getItem("localThing");
    let obj = {
        currentURL : currentURL,
        localStoragePosts : userInfoId
    }

    $.post("/bookmarks", obj, function(response){

    });
})