

$(function () {

    var swiper = new Swiper(".mySwiper", {
        centeredSlides: true,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });
    var swiper = new Swiper(".sub_swiper", {
        centeredSlides: true,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    $(document).ready(function () {
        AOS.init();
    });

});
