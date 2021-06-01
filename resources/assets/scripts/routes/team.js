import 'select2'

export default {
  init() {
    $('[data-bio-target]').on('click', function (e) {
      e.preventDefault();
      var target = $(this).data('bio-target')
      var $target = $(`[data-bio-panel="${target}"]`)
      if (!$target.length) {
        return
      }
      if (window.innerWidth > 992) {
        $('[data-bio-panel]').not($target).slideUp();
        $('.member-container').addClass('active')
        $('[data-bio-target]').not(this).removeClass('open-bio')
        if ($(this).hasClass('open-bio')) {
          $('.member-container').removeClass('active')
        }
        $(this).toggleClass('open-bio')
        $target.slideToggle();
      }else {
        var $targetModal = $(`[data-bio-modal="${target}"]`)
        $targetModal.addClass('bio-modal-active');
      }

    });
    $('.close-bio a').on('click', function (e) {
      e.preventDefault();
      $('[data-bio-panel]').slideUp();
      $('.member-container').removeClass('active')
      $('[data-bio-target]').removeClass('open-bio')
    });
    $('.close-bio-modal a').on('click', function (e) {
      e.preventDefault();
      $('.bio-modal__position').removeClass('bio-modal-active');
    });
  },
  finalize() {
  },
};
