import Swiper from 'swiper'

export default {
  init() {
    // eslint-disable-next-line
    let heroSlider = new Swiper('.hero-slider', {
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: {
        crossFade: false,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });

    if (window.innerWidth < 992) {
      // eslint-disable-next-line
      let tileSlider = new Swiper('.tiles-slider', {
        slidesPerView: 1,
        slideClass: 'link-tile',
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },
      })
    }
    document.querySelector('#scroll-down').addEventListener('click', function () {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    });
  },
  finalize() {
  },
};
