( function( $ ) {

  $(document).ready(function(){

    // Smooth scroll to ID on any anchor link
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });

    // IRC-scroller
    $('.slide-irclog, .irclog, .slide-placeholder').css('height', window.innerHeight);
        $(window).resize(function(){
            $('.slide-irclog, .irclog, .slide-placeholder').css('height', window.innerHeight);
    });

    $(".irclog").hover(function () {
      $(".slide-irclog h2, .slide-irclog p, .slide-irclog span").addClass("blur");
      $(".slide-irclog .button").addClass("blur-button");
      $(".slide-irclog .shade").addClass("hovered");
    }, function () {
      $(".slide-irclog h2, .slide-irclog p, .slide-irclog span").removeClass("blur");
      $(".slide-irclog .button").removeClass("blur-button");
      $(".slide-irclog .shade").removeClass("hovered");
    });

    $(".slide-irclog .container").hover(function () {
      $(".slide-irclog h2, .slide-irclog p, .slide-irclog span").removeClass("blur");
      $(".slide-irclog .button").removeClass("blur-button");
      $(".slide-irclog .shade").removeClass("hovered");
    }, function () {
      $(".slide-irclog h2, .slide-irclog p, .slide-irclog span").addClass("blur");
      $(".slide-irclog .button").addClass("blur-button");
      $(".slide-irclog .shade").addClass("hovered");
    });

    // Fixed navigation waypoint
    $('.firstcontainer').waypoint(function(){
        $('.burger').toggleClass('over-the-edge');
    }, { offset: '0' } );

    // Ticker animation effect
    var dataName, inserChar, inserClass, jAnimConsole, separator;

    inserChar = '<span class="cursor"></span>';
    separator = ';';
    dataName = "list";
    inserClass = "inserChar";

    jAnimConsole = function() {
      // var blinkAnim, currentChar, currentWord, htmlInser, list, out, printWord, timeBwtLetters, timeBwtWords;
      var currentChar, currentWord, htmlInser, list, out, printWord, timeBwtLetters, timeBwtWords;
        out = $(this);
      list = $(this).data(dataName).split(separator);
      htmlInser = "<span class=" + inserClass + ">" + inserChar + "</span>";
      out.html(htmlInser);
      // blinkAnim = function() {
      //   $("." + inserClass).delay(1000).hide(100).delay(1000).show(100);
      //   $("." + inserClass).queue(function(next) {
      //     next();
      //     blinkAnim();
      //   });
      // };
      currentWord = 0;
      currentChar = 1;
      timeBwtLetters = 60;
      timeBwtWords = 4000;
      printWord = function() {
        var substr;
        substr = list[currentWord].substr(0, currentChar++);
        out.html("" + substr + htmlInser);
        if (currentChar <= list[currentWord].length) {
          return setTimeout(printWord, timeBwtLetters);
        } else {
          // setTimeout(blinkAnim, timeBwtLetters);
          currentWord = (currentWord + 1) % list.length;
          currentChar = 1;
          return setTimeout(printWord, timeBwtWords);
        }
      };
      setTimeout(printWord, 0);
    };

    $(".type p").each(jAnimConsole);

  });

} )( jQuery );
