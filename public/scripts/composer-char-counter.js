$(document).ready(function() {
  const renderError = function(message) {
    $('#error').remove();
    const error = $(`<div id="error"> ${message} </div>`);
    $('.new-tweet').prepend(error);
    $('#error').slideDown("slow"); //animations;
  };

  $('#tweet-text').keyup(function() {
    const tweet = $(this).val();
    console.log(tweet);
    const limit = $('.counter');
    limit.val(140 - tweet.length);
    console.log(limit.val());

    if (tweet.length > 140) {
      limit.css('color', 'red');
      renderError("Tweet too long, please respect 140 characters rule!!");
      //console.log($('#submit-btn')[0]);
      $('#submit-btn').prop('disabled', true); //disable it
    } else {
      limit.css('color', 'black');
      $('#error').remove();
      $('#submit-btn').prop('disabled', false); //enable it so it can submit
    }
  });

  $('#submit-btn').click(function() {
    $('.counter').val(140);
    if ($('#tweet-text').val() === "") {
      renderError("Blank tweets are no good!!");
    } else if ($('#tweet-text').val().length > 140) {
      renderError("Tweet too long, please respect 140 characters rule!!");
    }
  });
});