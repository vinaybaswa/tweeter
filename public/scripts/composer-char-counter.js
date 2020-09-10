$(document).ready(function() {
  console.log("DOM ready from char-counter")

  $('#tweet-text').keyup(function() {
    const tweet = $(this).val();
    console.log(tweet);
    const limit = $('.counter');
    limit.val(140 - tweet.length);
    console.log(limit.val())

    if (tweet.length > 140) {
      limit.css('color', 'red');
      alert("tweet too long, please respect 140 characters rule!!")
    }
  });

  $('#submit-btn').click(function() {
    $('.counter').val(140);
    if ($('#tweet-text').val() === "") {
      alert("Blanks tweets are no good!!");

    } else if ($('#tweet-text').val().length > 140) {
      ralert("tweet too long, please respect 140 characters rule!!")

    }
  })


});