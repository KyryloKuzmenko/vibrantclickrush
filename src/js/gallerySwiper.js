import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let gallerySwiper;

function initGallerySwiper() {
  gallerySwiper = new Swiper('.gallery-swiper', {
    slidesPerView: 1.5,
    spaceBetween: 16,
    mousewheel: true,

    pagination: {
      el: '.gallery-pagination',
      clickable: true,
      enabled: true,
    },

    scrollbar: {
      el: '.gallery-scrollbar',
      draggable: true,
      enabled: false,
    },

    breakpoints: {
      1200: {
        slidesPerView: 3.2,
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

window.addEventListener('load', initGallerySwiper);
