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
}

//Creates element for each tweet
const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $(document).ready(function() {
      $(".tweets-container").append($tweet);
    });
  }
}

renderTweets(data);

$.get("/tweets")
  .then(responnse => renderTweets(responnse))
  .catch(e => $(".tweets-container").append(`<h1>SOMETHING'S WRONG</h1>`))