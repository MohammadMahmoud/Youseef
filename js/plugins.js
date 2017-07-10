// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
$(document).ready(function () {

    "use strict";

    // OwlSlider

    $(".owl-carousel").owlCarousel({
        items: 1,
        margin: 10,
        autoHeight: true,
        mouseDrag: false,
        dots: true
        //  nav:true
        // navText: ["<i class='fa fa-angle-left fa-5x' aria-hidden='true'></i>","<i class='fa fa-angle-right fa-5x    ' aria-hidden='true'></i>"]
    });

    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });


    $("#firm-button").click(function() {
        var offset = 20;

        $('html, body').animate({
            scrollTop: $("#firm").offset().top + offset
        }, 2000);
    });

    $("#people-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#people").offset().top
        }, 2000);
    });


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 800) {
            $(".navbar ").addClass("fixed-top");
        } else {
            $(".navbar ").removeClass("fixed-top");
        }
    });

});

// Place any jQuery/helper plugins in here.
