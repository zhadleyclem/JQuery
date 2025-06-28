$(document).ready(function() {
  $('div').mouseover(function() {
    $(this).css('background-color', 'yellow');
  });

  $('div').mouseleave(function() {
    $(this).css('background-color', 'white');
  });

  $('#fade1').click(function() {
    $('#div1').fadeIn();
  });
  $('#fade2').click(function() {
    $('#div2').fadeIn();
  });
  $('#fade3').click(function() {
    $('#div3').fadeIn();
  });

  $('#datepicker').datepicker();

  $('#accordion').accordion();

  let progress = 0;
  setInterval(function() {
    if (progress < 100) {
      progress += 5;
      $('#progressbar').val(progress);
    }
  }, 1000);
});
