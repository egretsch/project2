$('.delete-button').on("click", function(){
<<<<<<< HEAD

=======
    let localStoragePosts = localStorage.getItem("localThing");
>>>>>>> 3ebe50734b603e9380fa4a4479dc9f32c225f4c7
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
<<<<<<< HEAD
          window.location.href = "/posts";
=======
          setTimeout(() => {
            window.location.href = "/posts/" + localStoragePosts;
        }, 300);
>>>>>>> 3ebe50734b603e9380fa4a4479dc9f32c225f4c7
    });
});

$('.edit-button').on("click", function(){
<<<<<<< HEAD

=======
    let localStoragePosts = localStorage.getItem("localThing");
>>>>>>> 3ebe50734b603e9380fa4a4479dc9f32c225f4c7
    let articleID = $(this).attr("data");
    

    $.ajax({
        method: "GET",
        url: "/edit/"+articleID
      })
        .then(function(response) {
          console.log(response);
          window.location.href = "/edit/"+articleID;
<<<<<<< HEAD
=======
          
>>>>>>> 3ebe50734b603e9380fa4a4479dc9f32c225f4c7
    });
});

