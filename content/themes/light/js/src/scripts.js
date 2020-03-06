// YouTube Player API for BG video
// Insert the <script> tag targeting the iframe API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Get the video ID passed to the data-video attribute
const bgVideoID = document.querySelector('.js-background-video').getAttribute('data-video');

// Set the player options
const playerOptions = {
  // Autoplay + mute has to be activated (value = 1) if you want to autoplay it everywhere 
  // Chrome/Safari/Mobile
  autoplay: 1,
  mute: 1,
  autohide: 1, 
  modestbranding: 1, 
  rel: 0, 
  showinfo: 0, 
  controls: 0, 
  disablekb: 1, 
  enablejsapi: 1, 
  iv_load_policy: 3,
  startAt: 260,
  // For looping video you have to have loop to 1
  // And playlist value equal to your currently playing video
  loop: 1,
  playlist: bgVideoID,
}

// Get the video overlay, to mask it when the video is loaded
const videoOverlay = document.querySelector('.js-video-overlay');

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player('yt-player', {
    width: '1280',
    height: '720',
    videoId: bgVideoID,
    playerVars: playerOptions,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  ytPlayer = new YT.Player('yt-player-xonotic', {
    width: '1280',
    height: '720',
    videoId: 'DKvh_IwG7o4',
    playerVars: {
      // Autoplay + mute has to be activated (value = 1) if you want to autoplay it everywhere 
      // Chrome/Safari/Mobile
      autoplay: 1,
      mute: 1,
      autohide: 1, 
      modestbranding: 1, 
      rel: 0, 
      showinfo: 0, 
      controls: 0, 
      disablekb: 1, 
      enablejsapi: 1, 
      iv_load_policy: 3,
      startAt: 260,
      // For looping video you have to have loop to 1
      // And playlist value equal to your currently playing video
      loop: 1,
      playlist: 'DKvh_IwG7o4',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    }
  });

  ytPlayer = new YT.Player('yt-player-skribbl', {
    width: '1280',
    height: '720',
    videoId: '_SQmdP-Dvag',
    playerVars: {
      // Autoplay + mute has to be activated (value = 1) if you want to autoplay it everywhere 
      // Chrome/Safari/Mobile
      autoplay: 1,
      mute: 1,
      autohide: 1, 
      modestbranding: 1, 
      rel: 0, 
      showinfo: 0, 
      controls: 0, 
      disablekb: 1, 
      enablejsapi: 1, 
      iv_load_policy: 3,
      startAt: 0,
      // For looping video you have to have loop to 1
      // And playlist value equal to your currently playing video
      loop: 1,
      playlist: '_SQmdP-Dvag',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    }
  });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();

  // Get the duration of the currently playing video
  const videoDuration = event.target.getDuration();
  
  // When the video is playing, compare the total duration
  // To the current passed time if it's below 2 and above 0,
  // Return to the first frame (0) of the video
  // This is needed to avoid the buffering at the end of the video
  // Which displays a black screen + the YouTube loader
  setInterval(function (){
    const videoCurrentTime = event.target.getCurrentTime();
    const timeDifference = videoDuration - videoCurrentTime;
    
    if (2 > timeDifference > 0) {
      event.target.seekTo(0);
    }
  }, 1000);
}

// When the player is ready and when the video starts playing
// The state changes to PLAYING and we can remove our overlay
// This is needed to mask the preloading
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    videoOverlay.classList.add('video-overlay--fadeOut');
  }
}

( function( $ ) {

  $(document).ready(function(){

    if($('.screenshot').length) {
    $(window).scroll(function(){
      // This is then function used to detect if the element is scrolled into view
      function elementScrolled(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
      }
    
      if(elementScrolled('.screenshot')) {
        $('.screenshot').addClass('animate');
      }
    });
    }

    if($('a[href^="#"]').length) {
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
    }

    // IRC-scroller
    $('.slide-irclog, .irclog, .slide-placeholder').css('height', window.innerHeight);
        $(window).resize(function(){
            $('.slide-irclog, .irclog, .slide-placeholder').css('height', window.innerHeight);
    });

    // Fade/blur effect
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
        $('.hamburger-box').toggleClass('invert');
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
