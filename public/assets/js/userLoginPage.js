$('.creating-user-button').on("click", function(){
    console.log("I have been pushed!");

    let creatingUserEmail = $('.signingInUserEmail').val();
    let creatingUserPassword = $('.signingInUserPassword').val();
    
    let UseSigningInObj = {
        email : creatingUserEmail,
        password : creatingUserPassword,
    }
    
    console.log(UseSigningInObj);

    // $.post("", newUserLoginObj, function(response){
    //     console.log(response);
    //     window.location.href = "/";
    // });

});