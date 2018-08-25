$('.delete-button').on("click", function(){
    let localStoragePosts = localStorage.getItem("localThing");
    let articleID = $(this).attr("data");
    
    let articleToDelete = {
        id : articleID,
    }

    $.ajax({
        method: "DELETE",
        url: "/article/delete/" + articleID
      })
        .then(function(response) {
          console.log(response);
          setTimeout(() => {
            window.location.href = "/posts/" + localStoragePosts;
        }, 300);
    });
});

$('.delete-bookmark-button').on("click", function(){
    let localStoragePosts = localStorage.getItem("localThing");
    let articleID = $(this).attr("data");
    
    let articleToDelete = {
        id : articleID,
    }

    $.ajax({
        method: "DELETE",
        url: "/bookmarks/delete/" + articleID
      })
        .then(function(response) {
          console.log(response);
          setTimeout(() => {
            window.location.href = "/bookmarks/" + localStoragePosts;
        }, 300);
    });
});

$('.edit-button').on("click", function(){
    let localStoragePosts = localStorage.getItem("localThing");
    let articleID = $(this).attr("data");
    

    $.ajax({
        method: "GET",
        url: "/edit/"+articleID
      })
        .then(function(response) {
          console.log(response);
          window.location.href = "/edit/"+articleID;
          
    });
});

