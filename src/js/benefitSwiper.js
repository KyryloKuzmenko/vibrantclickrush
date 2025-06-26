import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let benefitSwiper = null;

function initBenefitSwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !benefitSwiper) {
    benefitSwiper = new Swiper('.benefits-swiper', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 20,
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

  if (!isMobile && benefitSwiper) {
    benefitSwiper.destroy(true, true);
    benefitSwiper = null;
  }
}

window.addEventListener('load', initBenefitSwiper);
window.addEventListener('resize', initBenefitSwiper);
