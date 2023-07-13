var preload_time = 3000; // How long preload is shown
var preload_fade_speed = 100; // Preload fadeout speed

setTimeout(function(){
  $('.loader').fadeOut(preload_fade_speed); // Fade out preloader
  open_modal(); // Open tutorial
},preload_time);

// End preloader

// Tutorial modal

function open_modal(){
  $('.tut').addClass('poptut'); // Remove
  $('.question').fadeOut(400); // Fadeout
}

function close_modal(){
  $('.question').fadeIn(400); // Fadeout
  $('.tut').removeClass('poptut'); // Remove
  $('h1,h2').addClass('popone'); // Intro
  $('.character').addClass('poptwo'); // Intro
  $('.rating').addClass('popthree'); // Intro
  $('.next,.prev').addClass('popfour'); // Intro
}

$('.tut p').click(function(){
  close_modal(); // Close modal
});

$('.question p').click(function(){
  open_modal(); // Open modal
})

// End tutorial modal

// Page slider

var slide_amount = $('.feedbackform_slide').length; // Slide count
var window_width = $(window).width(); // Init window width
var current_x = 0; // Current x value of slides
var current_position = 0; // Current position

$('.feedbackform').css('width',window_width * slide_amount + 'px'); // Set up the slides
$('.feedbackform_slide').css('width',window_width + 'px'); // Set up the slides

$('.next').click(function(){
  update_answers();
  var window_width = $(window).width(); // Re assess window width
  if(current_position < slide_amount - 1){
    current_position++;
    current_x = current_position * window_width;
    $('.feedbackform_slide').css('right',current_x);
    $('.active_slide').removeClass('active_slide').next().addClass('active_slide');
    setTimeout(function(){
      $('.active_slide').find('.popone').removeClass('popone'); // Reset animations
      $('.active_slide').find('.poptwo').removeClass('poptwo'); // Reset animations
      $('.active_slide').find('.popthree').removeClass('popthree'); // Reset animations
      $('.active_slide').find('.popfour').removeClass('popfour'); // Reset animations
    },10)
    setTimeout(function(){
      $('h1,h2').addClass('popone'); // Reset animations
      $('.character,a.follow,a.download').addClass('poptwo'); // Reset animations
      $('.rating').addClass('popthree'); // Reset animations
      $('.next,.prev').addClass('popfour'); // Reset animations
    },410)
  }
});

$('.prev').click(function(){
  update_answers();
  var window_width = $(window).width();
  if(current_position > 0){
    current_position--;
    current_x = current_position * window_width;
    $('.feedbackform_slide').css('right',current_x);
    $('.active_slide').removeClass('active_slide').prev().addClass('active_slide');
    setTimeout(function(){
      $('.active_slide').find('.popone').removeClass('popone'); // Reset animations
      $('.active_slide').find('.poptwo').removeClass('poptwo'); // Reset animations
      $('.active_slide').find('.popthree').removeClass('popthree'); // Reset animations
      $('.active_slide').find('.popfour').removeClass('popfour'); // Reset animations
    },10)
    setTimeout(function(){
      $('h1,h2').addClass('popone'); // Reset animations
      $('.character,a.follow,a.download').addClass('poptwo'); // Reset animations
      $('.rating').addClass('popthree'); // Reset animations
      $('.next,.prev').addClass('popfour'); // Reset animations
    },410)
  }
});

$(window).resize(function(){ // Responisivity
  var window_width = $(window).width(); // Window width
  $('.feedbackform').css('width',window_width * slide_amount + 'px'); // Re jig slide sizes
  $('.feedbackform_slide').css('width',window_width + 'px'); // Re jig slide sizes
  current_position = 0; // Reset
  current_x = current_position * window_width; // Reset
  $('.feedbackform_slide').css('right',current_x); // Reset
  $('.active_slide').removeClass('active_slide')
  $('.first').addClass('active_slide');
});

// End page slider

// Questions

var questions = ['How would you rate the overall experience of the website?','how would you rate the level of enjoyment and entertainment provided by the activities and games?','how would you rate the quality of the jokes and humor provided on the website?','how would you rate the overall design and visual appeal of the website?']
var q = 0;

$('.question_s').each(function(){
  $(this).html(questions[q])
  q++;
})

// Summary
var answers = []

var animals = ['monkey','rabbit','panda','lion']
for(i = 0; i < animals.length; i++){
  answers[animals[i]] = ['Average'] 
}

function update_answers(){
   $('.summary').html('');
  for(i = 0; i < questions.length; i++){
    $('.summary').append('<p>' + questions[i] + '</p><p class="answer_p">' + answers[animals[i]][0] + '</p>')
  }
}
// Messages

var monkey_messages = ['terrible','bad','not great','average','good','excellent','amazing']; // Monkey array
var rabbit_messages = ['dissapointed','unhappy','not great','average','pleased','happy','super happy']; // Rabbit array
var panda_messages = ['terrible','bad','not great','average','good','excellent','amazing']; // Panda array
var lion_messages = ['terrible','bad','not great','average','good','excellent','amazing']; // Lion array

// The smile

$('input').mousedown(function(){
  $('input').css('cursor','-webkit-grabbing'); // Change cursor
  $('input').css('cursor','-moz-grabbing'); // Change cursor
});

$('input').mouseup(function(){
  $('input').css('cursor','-webkit-grab'); // Change cursor
  $('input').css('cursor','-moz-grab'); // Change cursor
});

var smile_value;

$('input').mousedown(function(){
  var active_smile = $(this).attr('class').split(' ').pop(); // Get active smile
  s = setInterval(function(){
    // Change smile svg coords
    smile_value = $('input.' + active_smile).val(); // Get the value
    $('.smile.' + active_smile + ' path').attr('d','M10 10 C 20 ' + smile_value + ', 40 ' + smile_value + ', 50 10');
    // Select relevant array
    if(active_smile == 'monkey'){
      var active_array = monkey_messages; // Monkey array
    } else if(active_smile == 'rabbit'){
      var active_array = rabbit_messages; // Rabbit array
    } else if(active_smile == 'panda'){
      var active_array = panda_messages; // Panda array
    } else if(active_smile == 'lion'){
      var active_array = lion_messages; // Lion array
    }
    answers[active_smile] = [$('.rating.' + active_smile + ' span').html()]; // Push to answers
    $('.sb.' + active_smile).css('opacity',(smile_value/60)); // Pattern opacity
    $('.grad.' + active_smile).css('opacity',(smile_value/40)); // Gradient opacity
    if(smile_value == 0){
      // Worst
      $('.rating.' + active_smile + ' span').html(active_array[0]); // Set message
    } else if(smile_value < 10 && smile_value > 5){
      // Bad
      $('.rating.' + active_smile + ' span').html(active_array[1]); // Set message
    } else if(smile_value < 5 && smile_value > 0){
      // Not good
      $('.rating.' + active_smile + ' span').html(active_array[2]); // Set message
    } else if(smile_value == 10){
      // Average
      $('.rating.' + active_smile + ' span').html(active_array[3]); // Set message
    } else if(smile_value > 10 && smile_value < 15){
      // Good
      $('.rating.' + active_smile + ' span').html(active_array[4]); // Set message
    } else if(smile_value > 15 && smile_value < 20){
      // Very good
      $('.rating.' + active_smile + ' span').html(active_array[5]); // Set message
    } else if(smile_value== 20){
      // Amazing
      $('.rating.' + active_smile + ' span').html(active_array[6]); // Set message
    }        
  },10)
});

// Clear interval

$('input').mouseup(function(){
  clearInterval(s); // Clear intervals
});
