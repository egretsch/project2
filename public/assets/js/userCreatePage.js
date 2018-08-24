$('.creating-user-button').on("click", function(){
    console.log("I have been pushed!");

    let creatingUserFirstName = $('.creatingUserFirstName').val();
    let creatingUserLastName = $('.creatingUserLastName').val();
    let creatingUserEmail = $('.creatingUserEmail').val();
    let creatingUserPassword = $('.creatingUserPassword').val();
    
    let newUserLoginObj = {
        first_name : creatingUserFirstName,
        last_name : creatingUserLastName,
        email : creatingUserEmail,
        password : creatingUserPassword,
    }
    
    console.log(newUserLoginObj);

    $.post("/api/addUser", newUserLoginObj, function(data){
        window.location.href = "/";
      })

      
});