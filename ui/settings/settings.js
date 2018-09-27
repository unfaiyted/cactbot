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


function setVolume(myVolume) {
  console.log(myVolume);
}


$('h2').click((e) => {
  const nextDiv = $(e.target).next('div');
  $('#cactbot-module section h2 + div').removeClass('active');
  nextDiv.addClass('active');
});


$('.menu span').click((e) => {
  $('#raidboss, #oopsyraid, #jobs').removeClass('active')
  $('#' + e.target.innerHTML).addClass('active');
});
