

$(function () {

    $(window).on('scroll', function () {
        const scrollHeight = $(window).scrollTop();
        console.log(scrollHeight);
        if (scrollHeight > 0) {
            $('.header_bottom').addClass('on')

        } else {
            $('.header_bottom').removeClass('on')
            $('.header_tab').removeClass('on')
        }
    });


    $('.tab_ul ul').on('click', function () {
        $(this).toggleClass('on');
    });


    $('.tab_ul .close').on('click', function () {
        $('.tab_ul').toggleClass('on')
    });


    $('.tab_menu button').on('click', function () {
        $('.tab_ul').toggleClass('on');
        $(this).toggleClass('on');
    });


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
        speed: 1000,
        spaceBetween: 30,



        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            500: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,

            },
            1200: {
                slidesPerView: 4,

            },
        },

    });
    var swiper = new Swiper(".txt_swiper", {

        spaceBetween: 15,
        speed: 1000,



        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },


        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,

            },
            1200: {
                slidesPerView: 3,

            },
        },

    });
    $(document).ready(function () {
        AOS.init();
    });

});
