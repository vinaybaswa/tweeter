$(document).ready(function() {
  console.log("DOM ready from char-counter")

  const renderError = function(message) {
    $('#error').remove();
    //create the new element 
    let error = $(`<div id="error"> ${message} </div>`);
    //append to new tweet 
    $('.new-tweet').prepend(error);
    $('#error').slideDown("slow"); //animations;
  }

  $('#tweet-text').keyup(function() {
    const tweet = $(this).val();
    console.log(tweet);
    const limit = $('.counter');
    limit.val(140 - tweet.length);
    console.log(limit.val())

    if (tweet.length > 140) {
      limit.css('color', 'red');
      renderError("Message exceeded character length of 140 characters.");
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
      renderError("Blanks tweets are no good!!");

    } else if ($('#tweet-text').val().length > 140) {
      renderError("tweet too long, please respect 140 characters rule!!")
    }
  })


});