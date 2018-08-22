$('.delete-button').on("click", function(){

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
          window.location.href = "/posts";
    });
});

$('.edit-button').on("click", function(){

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

