$(document).ready(function() {

  //converts data in to HTML element
  const createTweetElement = function(tweet) {
    const text = $("<div>").text(tweet.content.text).html();
    const $tweet = $(`<div class = "tweet">
    <div class="tweet-header">
    <img src="${tweet.user.avatars}" class="tweeter-icon"> 
    <p class="tweeter-name"> ${tweet.user.name} </p>
    <p class="handle"> ${tweet.user.handle} </p>
    </div>
    <h2 class = "tweet1">${text}</h2>
    <div class="tweet-footer">
    <p class="days-ago"> ${moment(tweet.created_at).toNow(true)} ago </p>
    <p class="small-icons"> <i class="fa fa-flag"></i> <i class="fa fa-retweet"></i><i class="fa fa-heart"></i></p>
    </div>
    </div>`);
    return $tweet;
  };

  //To toggle tweet input form
  $('.angled-arrow').click(function() {
    $(".btn-and-input").slideToggle("slow");
  });

  //Sends form data to server
  $("form").submit(function(event) {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $(this).serialize() //turns form data into query string
    }).then(function() {
      loadTweets();
      $('#tweet-text').val("");
    });

  });

  //Creates element for each tweet
  const renderTweets = function(tweets) {
    $('.tweets-container').empty();
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $(".tweets-container").prepend($tweet);
    }
  };

  //Fetches tweets from /tweets
  const loadTweets = () => {
    $.get("/tweets")
      .then(response => renderTweets(response))
      .catch(e => $(".tweets-container").prepend(`<h1>SOMETHING'S WRONG</h1>`));
  };

  loadTweets();

});