import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let reviewsSwiper;

function initReviewsSwiper() {
  reviewsSwiper = new Swiper('.reviews-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    mousewheel: true,
    centeredSlides: true,

    pagination: {
      el: '.reviews-pagination',
      clickable: true,
      enabled: true,
    },

    scrollbar: {
      el: '.reviews-scrollbar',
      draggable: true,
      enabled: false,
    },

    breakpoints: {
      1200: {
        slidesPerView: 2.5,
        spaceBetween: 24,

        pagination: { enabled: false },

        scrollbar: { enabled: true },

        centeredSlides: false,
      },
    },

    on: {
      afterInit(swiper) {
        swiper.slideTo(0, 0);
      },
    },
  });
}

window.addEventListener('load', initReviewsSwiper);