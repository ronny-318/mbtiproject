$(function(){
    $('.autoplay').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 3000,
        prevArrow: false,
        nextArrow: false,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        swipe: false,
        swipeToSlide: false,
        touchMove: false,
    });
})