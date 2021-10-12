$(document).ready(function () {
  // --- our code goes here ---
  $("#tweet-text").keyup(function () {
    var textAreaLength = $("#tweet-text").val().length;
    const clicks = 140;
    var counter = parseInt(clicks) - parseInt(textAreaLength)
    $("#counter_clicks").text(counter);
    if (textAreaLength > clicks) {
      console.log("Inside css if loop")
      $("#counter_clicks").css("color", "red")
    }
    else {
      $("#counter_clicks").css("color", "black")
    }
    if(textAreaLength > 0 && textAreaLength <= 140){
      $(".displayerror").text("");
      $("#error").hide();
    }
  })

});




