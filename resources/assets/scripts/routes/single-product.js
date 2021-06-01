import Swiper from 'swiper'

export default {
  init() {

    // eslint-disable-next-line
    let thumbs = new Swiper ('.product-slider__thumbs', {
      slidesPerView: 4,
      spaceBetween: 12,
      height: 89,
      breakpoints: {
        576: {
          slidesPerView: 6,
          spaceBetween: 12,
          height: 89,
        },
      },
    });
    // eslint-disable-next-line
    let productSlider = new Swiper ('.product-slider', {
      slidesPerView: 1,
      thumbs: {
        swiper: thumbs,
      },
    });


  },
  finalize() {
  },
};
