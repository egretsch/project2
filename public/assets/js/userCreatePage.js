$('.creating-user-button').on("click", function(){
    console.log("I have been pushed!");

    let creatingUserFirstName = $('.creatingUserFirstName').val();
    let creatingUserLastName = $('.creatingUserLastName').val();
    let creatingUserEmail = $('.creatingUserEmail').val();
    let creatingUserPassword = $('.creatingUserPassword').val();
    
    let newUserLoginObj = {
        firstName : creatingUserFirstName,
        lastName : creatingUserLastName,
        email : creatingUserEmail,
        password : creatingUserPassword,
    }
    
    console.log(newUserLoginObj);

    // $.post("", newUserLoginObj, function(response){
    //     console.log(response);
    //     window.location.href = "/";
    // });


    $.post("/api/addUser", newUserLoginObj, function(data){
        // window.location.href = "/"
      })

      $.post("/api/validate", newUserLoginObj, function (data) {
        // window.location.href = "/"
      })
});