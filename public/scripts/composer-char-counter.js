$(document).ready(function() {
  console.log("DOM ready")
});

$('#tweet-text').keyup(function() {
  let tweet = $(this).val();
  console.log(tweet);
  let limit = $('.counter');
  limit.val(140 - tweet.length);
  console.log(limit.val())

  if (tweet.length > 140) {
    limit.css('color', 'red');
    //renderError('tweet too long - please limit to 140 characters');
    //console.log(('#submit-btn')[0]);
  }


});