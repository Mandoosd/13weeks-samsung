$(function () {

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    var swiper = new Swiper(".sub_swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });


    Aos.init();

});
