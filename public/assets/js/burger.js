$(function() {
    $(".devoured").on("click", function(event) {
   
        event.preventDefault();
        console.log($(this).data("id"));
        
   
    
        $.ajax("/api/burgers/" + $(this).data("id"), {
          type: "PUT",
          }).then(
          function() {
          $(this).data("devoured = true")
    
            location.reload();
          }
        );
      });
    
  
    $(".create-form").on("submit", function(event) {
   
      event.preventDefault();
    //   console.log("post works");
      var newBurger = {
        name: $("#bur").val().trim(),
        // devoured: $("[name=devoured]:checked").val()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
  
      }).then(
        function() {
        //   console.log("post works");
  
          location.reload();
        }
      );
    });
  
   
  });
  