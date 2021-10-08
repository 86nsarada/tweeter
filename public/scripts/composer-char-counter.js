$(document).ready(function() {
    // --- our code goes here ---
    // $("input").blur(function(){
    //     console.log("this is blur event")
    // })

    $("#tweet-text").keyup(function(){
      var textAreaLength= $("#tweet-text").val().length;
      const clicks = 140;
      var counter = parseInt(clicks) - parseInt(textAreaLength)
      $("#counter_clicks").text(counter);
      if(textAreaLength > clicks){
          console.log("Inside css if loop")
          $("#counter_clicks").css("color","red")
        }
        else{
          $("#counter_clicks").css("color","black")
        }
     
    })

    


    // $("#btn").on('click', function() {
    //   console.log(this); //The this keyword is a reference to the button
    // });
    
    // $("#btn").on('click', () => {
    //   console.log(this); //The this keyword here refers to something else!
    // });
  

  });

  

  
  