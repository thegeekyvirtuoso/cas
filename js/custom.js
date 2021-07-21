jQuery(document).ready( function($){

    var lastScrollTop = 0;
    window.addEventListener("scroll", function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            jQuery('#header.sticky-on-scrollup').removeClass('show-sticky-onscroll'); // Down Scroll
        } else {
            jQuery('#header.sticky-on-scrollup').addClass('show-sticky-onscroll'); // Up Scroll
        }
        lastScrollTop = st;
    });

    $('.services-grid .feature-box').hover(
        function () {
            $(this).addClass("dark");
        },
        function () {
            $(this).removeClass("dark");
        }
    );

});