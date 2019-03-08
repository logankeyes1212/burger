$(function () {
    $(".devoured").on("click", function (event) {
        event.preventDefault();
        console.log($(this).data("id"));

        $.ajax("/api/burgers/" + $(this).data("id"), {
            type: "PUT",
        }).then(
            function () {
                $(this).data("devoured = true")
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            name: $("#bur").val().trim(),
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });
});
