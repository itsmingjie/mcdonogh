$(document).ready(function() {
  /*var windowWidth = $(window).width;
  console.log(windowWidth);
  if (windowWidth > 580) {
    var cardHeight = $('#target').height();
    cardHeight = cardHeight + 'px';
    console.log(cardHeight);
    var i = 0;
    while (i < 10) {
      document.getElementsByClassName('faq-item').item(i).style.height = cardHeight;
      i++
    }
  }*/
    $('.smooth').smoothScroll();
  if ($(window).width() <= 480) {
    document.getElementById('shuffle').removeAttribute("data-aos");
  }

  var capsule = $('.faq-item').length;
  var i = 0;
  var delayCounter = 0;
  while (i < capsule) {
    document.getElementsByClassName('faq-item')[i].setAttribute("data-aos-delay", delayCounter);
    i++
    if (i % 2 == 0 && $(window).width() >= 700) {
      delayCounter = 0;
    }
    if ($(window).width() <= 700) {
      delayCounter = 0;
    }
    delayCounter = delayCounter + 150;
  }

  var capsule2 = $('.rep-block').length;
  var ii = 0;
  var delayCounter2 = 250;
    /*if (ii % 2 == 0 && $(window).width() >= 750) {
      delayCounter2 = 0;
      console.log('memememememe');
    }*/
    if ($(window).width() <= 750) {
      delayCounter2 = 0;
      while (ii < capsule2) {
        document.getElementsByClassName('rep-block')[ii].setAttribute("data-aos-delay", delayCounter2);
        ii++;
      }
    }

  $('#tab1').click(function() {
    $('#tab1').addClass('active');
    $('#tab2').removeClass('active');
    $('#day1').addClass('showntable');
    $('#day1').removeClass('hiddentable');
    $('#day2').removeClass('showntable');
    $('#day2').addClass('hiddentable');
  });
  $('#tab2').click(function() {
    $('#tab2').addClass('active');
    $('#tab1').removeClass('active');
    $('#day2').addClass('showntable');
    $('#day2').removeClass('hiddentable');
    $('#day1').addClass('hiddentable');
    $('#day1').removeClass('showntable');
  });
});
