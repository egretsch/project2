$('.creating-user-button').on("click", function(){
    console.log("I have been pushed!");

    let creatingUserEmail = $('.signingInUserEmail').val();
    let creatingUserPassword = $('.signingInUserPassword').val();
    
    let user = {
        email : creatingUserEmail,
        password : creatingUserPassword
    }

      $.post("/api/validate", user).then(function (data) {
        console.log(data.id);
        // let ourCookie = data.id;
        // document.cookie = ourCookie;

    });

});