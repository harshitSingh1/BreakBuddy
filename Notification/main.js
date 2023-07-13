// search-bar
$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
      var searchQuery = $('input[type="text"]').val().toLowerCase();
      $('.box').each(function() {
        var boxText = $(this).text().toLowerCase();
        if (boxText.indexOf(searchQuery) !== -1) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });
  //Hide sidebar
  const collapseButton = document.querySelector('.collapse-button');
  const sidebar = document.querySelector('.sidebar');
  
  collapseButton.addEventListener('click', function() {
    sidebar.classList.toggle('collapsed');
  });
// a function for share links
function shareLink() {
  var url = "https://harshitsingh1.github.io/BreakBuddy/";
  var title = "Check out this amazing platform!";
  var description = "Join the conversation at OpenAI Chat.";

  if (navigator.share) {
    navigator.share({
      title: title,
      text: description,
      url: url
    })
    .then(() => console.log('Successfully shared'))
    .catch((error) => console.log('Error sharing:', error));
  } else {
    alert("Sharing is not supported in your browser.");
  }
}
// set reminder
function setReminder() {
  var timeRange = prompt("Set reminder so that you don't miss your work. \nEnter reminder time (in minutes):");
  var minutes = parseInt(timeRange);

  if (!isNaN(minutes)) {
    var milliseconds = minutes * 60 * 1000;

    setTimeout(function() {
      var message = minutes + " minutes are over!";
      alert(message);
    }, milliseconds);
  }
}
//hide social media icons
function toggleIcons() {
  var iconsDiv = document.getElementById("socialMediaIcons");
  iconsDiv.classList.toggle("hidden");
}


// code for notification
$(document).ready(function() {
  function closeMessage(el) {
    el.addClass('is-hidden');
  }

  $('.js-messageClose').on('click', function(e) {
    closeMessage($(this).closest('.Message'));
  });

  $('#js-helpMe').on('click', function(e) {
    alert('Update your antivirus');
    closeMessage($(this).closest('.Message'));
  });

  $('#js-authMe').on('click', function(e) {
    alert('LinkedIn connected to the website successfully.');
    closeMessage($(this).closest('.Message'));
  });

  $('#js-showMe').on('click', function(e) {
    alert("You're off to our help section. See you later!");
    closeMessage($(this).closest('.Message'));
  });

  setTimeout(function() {
    closeMessage($('#js-timer'));
  }, 8000);
});
