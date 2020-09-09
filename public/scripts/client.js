/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from initial-tweets.json
const data = [{
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
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
]

const createTweetElement = function(tweet) {
    const $tweet = $(`<div class = "tweet">
  <div class="tweet-header">
    <img src="${tweet.user.avatars}" class="tweeter-icon"> 
    <p class="tweeter-name"> ${tweet.user.name} </p>
    <p class="handle"> ${tweet.user.handle} </p>
  </div>
  <h2 class = "tweet1">${tweet.content.text}</h2>
  <div class="tweet-footer">
    <p class="days-ago"> ${moment(tweet.created_at).toNow(true)} ago </p>
    <p class="small-icons"> <i class="fa fa-flag"></i> <i class="fa fa-retweet"></i><i class="fa fa-heart"></i></p>
  </div>
  </div>`);
    return $tweet;
    //$(".tweets-container").append($item);
  }
  //const $tweet = createTweetElement(data);

const renderTweets = function(tweets) {
  // loops through tweets
  for (const tweet of tweets) {
    // calls createTweetElement for each tweet
    const $tweet = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $(document).ready(function() {
      //console.log("we are ready")
      //console.log(createTweetElement(data))
      $('.tweets-container').append($tweet);
    });
  }
}

// const createTweetElement = function(tweet) {
//   let $tweet = /* Your code for creating the tweet element */
//     // ...
//     return $tweet;
// }

renderTweets(data);



// Test / driver code (temporary)
//console.log($tweet); // to see what it looks like
//$('.tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.