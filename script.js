$(document).ready(function() {
  // Mouseover and mouseleave effects for div
  $('div').mouseover(function() {
    $(this).css('background-color', 'yellow');
  });

  $('div').mouseleave(function() {
    $(this).css('background-color', 'white');
  });

  // Fade in and fade out effects for buttons
  $('#fade1').click(function() {
    $('#div1').fadeIn();
  });
  $('#fade2').click(function() {
    $('#div2').fadeIn();
  });
  $('#fade3').click(function() {
    $('#div3').fadeIn();
  });

  // Datepicker
  $('#datepicker').datepicker();

  // Accordion
  $('#accordion').accordion();

  // Progress bar (updates every second)
  let progress = 0;
  setInterval(function() {
    if (progress < 100) {
      progress += 5;
      $('#progressbar').val(progress);
    }
  }, 1000);
});
