// Smooth scroll
uAgent = navigator.userAgent;
macOS = uAgent.match(/(iPad|iPhone|iPod|Macintosh)/g) ? true : false;
mobileIE = uAgent.indexOf('IEMobile') !== -1;
touch = false;
windowWidth = $(window).width();
windowHeight = $(window).height();
documentHeight = $(document).height();
isNewerIe = uAgent.match(/msie (9|([1-9][0-9]))/i);
isOlderIe = uAgent.match(/msie/i) && !isNewerIe;
isAncientIe = uAgent.match(/msie 6/i);
isIe = isAncientIe || isOlderIe || isNewerIe;
latestKnownScrollY = $('html').scrollTop() || $('body').scrollTop();
ticking = false;
// Smooth scroll end

// Resize header
if (!$('.header').hasClass("no-index")) {
    $('.header').css('height', $(window).height());
    $(window).resize(function () {
        $('.header').css('height', $(window).height());
    });
}

// Change padding-top for main-text
paddingTop = (windowHeight/2);
if (windowWidth > 1200) {
    $(".top").css( "padding-top", paddingTop - 250 );
} else {
     $(".top").css( "padding-top", paddingTop - 200 );
}


$(document).ready(function () {
    // Preloader
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1);

    // VideoBG footer
     $(".player").mb_YTPlayer();
     $(".pattern-overlay").css("min-height", windowHeight);

    // Menu navigation
    $('.top-menu a').mPageScroll2id();
    $('.top-btn-touch a').mPageScroll2id();

    // CounterUp stats
    $('.block-stat h5').counterUp({
        delay: 2,
        time: 500
    });

    // Function for fill skill bar
    function fillBar(el, percent) {
        elementWidth = Math.round(el.width() / el.parent().width() * 100);
        width = elementWidth;
        id = setInterval(frame, 10);
        function frame() {
            if (width >= percent) {
                clearInterval(id);
            } else {
                width++;
                el.width(width + '%');
            }
        }
    }

    // Open UX/UI block
    uxElement = $('.ux');

    uxElement.children('.content-skill').slideToggle();
    uxElement.toggleClass( "active" );
    uxElement.children('.title-skill').children('.arrow-skill').removeClass('fa-angle-down');
    uxElement.children('.title-skill').children('.arrow-skill').addClass('fa-angle-up');
    uxElement.children('.title-skill').children('.arrow-skill').css('color', '#4ca1af');

    // Open/close blocks Idea, UX/UI, Code
    $('.about-skill').click(function(){
        $(this).children('.content-skill').slideToggle();
        $(this).toggleClass( "active" );
        if ($(this).children('.title-skill').children('.arrow-skill').hasClass('fa-angle-down')){
            $(this).children('.title-skill').children('.arrow-skill').removeClass('fa-angle-down');
            $(this).children('.title-skill').children('.arrow-skill').addClass('fa-angle-up');
            $(this).children('.title-skill').children('.arrow-skill').css('color', '#4ca1af');
        } else {
            $(this).children('.title-skill').children('.arrow-skill').removeClass('fa-angle-up');
            $(this).children('.title-skill').children('.arrow-skill').addClass('fa-angle-down');
            $(this).children('.title-skill').children('.arrow-skill').css('color', '#e1e1e1');
        }
    });
});


