$('.creating-user-button').on("click", function(){
    console.log("I have been pushed!");

    let creatingUserEmail = $('.signingInUserEmail').val();
    let creatingUserPassword = $('.signingInUserPassword').val();
    
    let user = {
        email : creatingUserEmail,
        password : creatingUserPassword
    }
    
    console.log(user);

      $.post("/api/validate", user).then(function (data) {
console.log(data);

    });

});