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

$(document).ready(function () {

    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1);

});

// Change padding-top for main-text
paddingTop = (windowHeight/2);
$(".top").css( "padding-top", paddingTop - 250 );

// Resize header
if (!$('.header').hasClass("no-index")) {
    $('.header').css('height', $(window).height());
    $(window).resize(function () {
        $('.header').css('height', $(window).height());
    });
}

// $( ".about-skill" ).click(function() {
//     console.log('Open');
// });

$('.ux').children('.content-skill').slideToggle();
$('.ux').toggleClass( "active" );
$('.ux').children('.title-skill').children('.arrow-skill').removeClass('fa-angle-down');
$('.ux').children('.title-skill').children('.arrow-skill').addClass('fa-angle-up');
$('.ux').children('.title-skill').children('.arrow-skill').css('color', '#4ca1af');

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
    // return false;
});