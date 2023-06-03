
let homeScroll = $("#scroll-ofSet").offset().top;

$(window).scroll(function () {
    let scrollWindow = $(window).scrollTop()
    if (scrollWindow > homeScroll -50) {
        
$("#nav-s").css("backgroundColor", "rgba(0,0,0,0.7)");

    }
    else {        
$("#nav-s").css("backgroundColor", "transparent");
    }
})

$("a[href^='#']").click(function (eventInfo) {
    let href = eventInfo.target.getAttribute('href');
let homeScroll = $(href).offset().top;

$("html, body").animate({ scrollTop: homeScroll }, 1500);

})










