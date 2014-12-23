$(document).ready(function(){

// Valikko
$(".menu").flexNav({
    "hover": true,
    "hoverIntent": false,
    "hoverIntentTimeout": 0,
    "animationSpeed": 0,
    "transitionOpacity": false,
    "calcItemWidths": false
});

$('.slide-irclog, .irclog, .slide-placeholder').css('height', window.innerHeight);
    $(window).resize(function(){
        $('.slide-irclog, .irclog, .slide-placeholder').css('height', window.innerHeight);
});

$(".slide-irclog, .irclog").hover(function () {
        setTimeout(function() {
            $(".slide-irclog .shade").addClass("hidden");
        }, 1000);
}, function () {
        setTimeout(function() {
            $(".slide-irclog .shade").removeClass("hidden");
        }, 1000);
    $(".slide-irclog h2, .slide-irclog p, .slide-irclog span").removeClass("hover");
});

// $(".slide-irclog, .irclog").click(function() {  
//     $(".slide-irclog h2, .slide-irclog p, .slide-irclog span").toggleClass("hover");
//     $(".shade").toggleClass("hidden");
// });

});