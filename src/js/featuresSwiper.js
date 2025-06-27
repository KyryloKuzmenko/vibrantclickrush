import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let keyFeaturesSwiper = null;

function initKeyFeaturesSwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !keyFeaturesSwiper) {
    keyFeaturesSwiper = new Swiper('.kf-swiper', {
      slidesPerView: 1.2,
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

  if (!isMobile && keyFeaturesSwiper) {
    keyFeaturesSwiper.destroy(true, true);
    keyFeaturesSwiper = null;
  }
}

window.addEventListener('load', initKeyFeaturesSwiper);
window.addEventListener('resize', initKeyFeaturesSwiper);