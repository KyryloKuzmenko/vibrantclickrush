import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let charactersSwiper = null;

function initCharactersSwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !charactersSwiper) {
    charactersSwiper = new Swiper('.main-characters-swiper', {
      slidesPerView: 1.4,
      // centeredSlides: true,
      spaceBetween: 16,
      mousewheel: true,
      breakpoints: {
        1200: {
          spaceBetween: 200,
        },
      },

      pagination: {
        el: '.benefits-pagination',
        clickable: true,
      },
    });
  }

  if (!isMobile && charactersSwiper) {
    charactersSwiper.destroy(true, true);
    charactersSwiper = null;
  }
}

window.addEventListener('load', initCharactersSwiper);
window.addEventListener('resize', initCharactersSwiper);