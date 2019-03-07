$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var isDevoured = $(this).data("isDevoured");
  
      var devouredState = {
        devoured: isDevoured
      };
  
      
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          console.log(isDevoured);
       
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
   
      event.preventDefault();
  
      var newBurger = {
        name: $("#bur").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("post works");
  
          location.reload();
        }
      );
    });
  
   
  });
  