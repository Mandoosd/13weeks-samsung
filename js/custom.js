

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
        slidesPerView: 4,
        spaceBetween: 15,
        speed: 1000,



        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },



    });
    var swiper = new Swiper(".txt_swiper", {
        slidesPerView: 3,

        spaceBetween: 15,
        speed: 1000,



        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },



    });
    $(document).ready(function () {
        AOS.init();
    });

});
