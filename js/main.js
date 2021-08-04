var swiper = new Swiper(".mySwiper", {
        spaceBetween: 4,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 4,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
});