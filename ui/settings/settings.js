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



$('.slider').each( function (index, value) {
    let that = $(this);


    that.slider({
             min: that.attr('data-min'),
             max: that.attr('data-max'),
             value: 0,
             range: 'min',
             slide: function(e, ui) {
               setVolume(ui.value / 100);
               $(e.target).siblings('.slider-val').text(
               ui.value + ' ' + that.attr('data-unit') +
                ((ui.value > 1 || ui.value === 0) ? 's': ''));
             },
     });
});



$('h2').click((e) => {
  const nextDiv = $(e.target.parentNode).next('div');

    let subSections =   $('#cactbot-module section .header + div');
    let headers = $('#cactbot-module section h2');

  if(nextDiv.hasClass('active')) {
    nextDiv.removeClass('active');
    $(e.target).removeClass('active');
    subSections.removeClass('active');
    headers.removeClass('active');
  } else {
      subSections.removeClass('active');
      headers.removeClass('active');
      $(e.target).addClass('active');
      nextDiv.addClass('active');
  }




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

