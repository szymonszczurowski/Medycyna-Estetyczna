$('.carousel').slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,

});


$(document).ready(function () {
    $('.opinions__boxes').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        mobileFirst: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }],

    });
})
