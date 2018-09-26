$(document).ready(function () {
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

      $('#tab1').click(function () {
        $('#tab1').addClass('active');
        $('#tab2').removeClass('active');
        $('#day1').addClass('showntable');
        $('#day1').removeClass('hiddentable');
        $('#day2').removeClass('showntable');
        $('#day2').addClass('hiddentable');
      });
      $('#tab2').click(function () {
        $('#tab2').addClass('active');
        $('#tab1').removeClass('active');
        $('#day2').addClass('showntable');
        $('#day2').removeClass('hiddentable');
        $('#day1').addClass('hiddentable');
        $('#day1').removeClass('showntable');
      });

      //   $("#submitEmail").click(() => {
      //     $("#emailError").hide();
      //     var email = $("input#email").val();

      //     if (email == "") {
      //       return;
      //     } else if (validateEmail(email)) {
      //       $.ajax({
      //         type: "POST",
      //         url: "https://script.google.com/macros/s/AKfycbzQwVyKVlBKYjSi3ItzoTfGagb6Fmgh02eps4aeplXVH1uah4c7/exec",
      //         data: "email=" + email,
      //         success: function () {
      //           $("#emailForm").html("<h2 class=\"super\">Thanks! You're on the list. We'll let you know as soon as we're ready!</h2>");
      //         }
      //       });
      //     } else {
      //       $("#emailError").show();
      //     }
      //   });
      // });

      // function validateEmail(email) {
      //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //   return re.test(String(email).toLowerCase());
      // }