import Swiper from 'swiper'

const SWIPER_CONFIG = {
  'default': {
    effect: 'coverflow',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    scrollbar: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    coverflowEffect: {
      rotate: 30,
      slideShadows: true,
    },
    centeredSlides: true,
  },
  'scrollable': {
    loop: false,
    centeredSlides: false,
    slidesPerView: 3,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  },
}

export default {
  init () {
    let slider = new Swiper($('.my-slider'), SWIPER_CONFIG.default);
    $('.js-change-slider').on('click', function () {
      let type = $(this).data('type')
      slider.destroy()
      slider = new Swiper($('.my-slider'), SWIPER_CONFIG[type]);
    })
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
