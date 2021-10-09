/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};



jQuery(document).ready(function () {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];


  function loadTweets() {
    console.log("inside load tweets");
    $.ajax({
        url: '/tweets',
        method: 'GET',
        datatype: "json",
        success: (tweets) => {
            //console.log("data:", tweets);
            tweets.reverse();
            renderTweets(tweets);
        }
    })
}
loadTweets();
$("#error").hide();

  const renderTweets = function (tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    
    //$('#tweet-container').empty();
    console.log("render tweets is running");
    for (let tweet of tweets) {
      //alert("is this thing really really on?");
      jQuery('#tweet-container').append(createTweetElement(tweet));
      // const $tweet = createTweetElement(tweet);      
      //  $("#tweet-container").prepend($tweet); 
    }
  }
  const createTweetElement = function (tweet) {
    //let $tweet = /* Your code for creating the tweet element */
    // ...
    let markup = `
         <article class="createTweet">
            <div class="photo">
              <img class="profile" src="${tweet.user.avatars}">
              
              <span>${tweet.user.name}</span>
            </div>
            <div class="name">
              <p>${tweet.user.handle}</p>
            </div>
          <div class="message">
            <p>${tweet.content.text}</p>
          </div>
          <footer>
          <span>${jQuery.timeago(tweet.created_at)}</span>
            <div class="icons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
          </footer>
        </article>`;
    return $(markup);
    //return $("<h1>Hello world<h1>");
    //<span>${timeago.format(tweet.created_at)}</span>

  };

  
  renderTweets(data);
  console.log("hello");


/* <article class="create-tweet">
          <div class="photo">
            <img src="${tweet.user.avatars}">
            <span>${tweet.user.name}</span>
          </div>
          <div class="name">
            <p>${tweet.user.handle}</p>
          </div>
          <div class="message">
            <p>${escape(tweet.content.text)}</p>
          </div>
          <label for="user-tweet-text">user 1 tweet!</label>

        <textarea name="new-text" id="new-tweet-text"></textarea>

          <footer>
            <span>${jquery.timeago(tweet.created_at)}</span>
            <div class="icons">
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>


            </div>

          </footer
        </article> */
        /* tweet form submission */
    $("#new-tweet-form").submit(function (event) {
      console.log('event');
      event.preventDefault();
      //event.stopImmediatePropagation()
      let charCount = $("#tweet-text").val().length;
      console.log(charCount)
      if (charCount === 0) {
        console.log("my hello world")
          $(".displayerror").text("You need letters to tweet");
          $("#error").slideDown();
      } else if (charCount > 140){ 
        //alert("more than 140 characters...please tweet upto 140 characters!");
          $(".displayerror").text("Too long,please give upto 140 characters!");
          $("#error").slideDown();
      } else {
          console.log($( this ).serialize());
          const serializedData = $(this).serialize();
          $.post("/tweets", serializedData, (response) => {
              loadTweets();
              $("#tweet-text").val("");
          });
      }
      console.log("hello world here?")
  })
})


