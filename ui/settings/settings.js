'use strict';

$('.volume').slider({
  min: 0,
  max: 100,
  value: 0,
  range: 'min',
  slide: function(e, ui) {
    setVolume(ui.value / 100);
    $(e.target).siblings('.volume-val').text(ui.value + '%');
  },
});


$('.slider').slider({
  min: 0,
  max: 20,
  value: 0,
  range: 'min',
  slide: function(e, ui) {
    setVolume(ui.value / 100);
    $(e.target).siblings('.slider-val').text(ui.value + 'seconds');
  },
});


$('h2').click((e) => {
  const nextDiv = $(e.target.parentNode).next('div');
  $('#cactbot-module section .header + div').removeClass('active');
  nextDiv.addClass('active');
});

$('.menu span').click((e) => {
  $('#raidboss, #oopsyraid, #jobs').removeClass('active');
  $('#' + e.target.innerHTML).addClass('active');
});

$('.hide-settings').click((e) => {
  if ($('#cactbot-module').hasClass('hide'))
    $('#cactbot-module').removeClass('hide');
  else
    $('#cactbot-module').addClass('hide');
});


// Volume set
function setVolume(myVolume) {
  // console.log(myVolume);
}

