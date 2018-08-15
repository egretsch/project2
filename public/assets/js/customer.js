// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-menu").on("click", function(event) {
      var id = $(this).data("id");
      var newEaten = $(this).data("newEeaten");
  
      var newMenuState = {
        devoured: newEaten
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newMenuState
      }).then(
        function() {
          console.log("changed menu state to", newEaten);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  