$(document).ready(function() {
// event listener for burger form submit 
  
$("#burger-form").on("submit", function(event) {

    event.preventDefault();

    const burgerData = {
      burger_name: $("#name-input").val().trim()
    }

    // use input to add the new burger

    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: burgerData
    }).then(function() {
      location.reload();
    }).catch(
      err => console.log(err)
    );
  });

  // event listner for any button with class of eat-burger 
  
  $(".eat-burger").on("click", function() {

    const burgerId = $(this).attr("data-id")
    const devoured = $(this).attr("data-devoured")

    // update burger so that it changes boolean value of devoured from false to true
    $.ajax({
      url: `/api/burgers/${burgerId}`,
      method: "PUT",
      data: {
        devoured: devoured
      }
    }).then(() => location.reload())
      .catch(err => console.log(err));
  });

  $(".another-burger").on("click", function() {

    const burgerId = $(this).attr("data-id")
    const devoured = $(this).attr("data-devoured")

    // update burger so that it changes boolean value of devoured from true to false
    $.ajax({
      url: `/api/burgers/${burgerId}`,
      method: "PUT",
      data: {
        devoured: devoured
      }
    }).then(() => location.reload())
      .catch(err => console.log(err));
  });


});