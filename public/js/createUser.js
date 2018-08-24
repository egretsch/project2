// $(document).ready(function() {
//   console.log("hello");
//   // Getting jQuery references to the post body, title, form, and author select
//   var createEmailInput = $("#createEmail");
//   var createPasswordInput = $("#createPassword");
//   var firstNameInput  = $("#createFirstName");
//   var lastNameInput = $("#createLastName");
//   var username = $("#username");
//   var password = $("#password");

//   // Constructing a newPost object to hand to the database


// $('#addUser').on('click', function() {
//   var newPost = {
//     email: createEmailInput
//       .val()
//       .trim(),
//     password: createPasswordInput
//       .val()
//       .trim(),
//     first_name: firstNameInput
//       .val()
//       .trim(),
//     last_name: lastNameInput
//       .val()
//       .trim()
//   };

//   $.post("/api/addUser", newPost, function(data){
//     // window.location.href = "/"
//   })
// })

//   $('#userLoggin').on('click', function () {
//     var user = {
//       email: username
//         .val()
//         .trim(),
//       password: password
//         .val()
//         .trim()
//     };

//     $.post("/api/validate", user, function (data) {
//       // window.location.href = "/"
//     })
//   })
  
// });
