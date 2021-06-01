import Headroom from 'headroom.js'

export default {
  init() {

    let header = new Headroom(document.querySelector('[data-headroom]'));
    header.init();

    //---Header Actions

    //Header Lang
    let langDropdown = document.querySelector('[data-dropdown-lang]');
    document.querySelector('[data-dropdown-lang-toggle]').addEventListener('click', function (e) {
      e.preventDefault();
      if (langDropdown.style.display === 'none') {
        langDropdown.style.display = 'block';
        window.addEventListener('scroll', function () {
          langDropdown.style.display = 'none';
        });
      } else {
        langDropdown.style.display = 'none';
        // window.removeEventListener('scroll');
      }
    });

    //Mega
    $('[data-target-mega]').click(function (e) {
      e.preventDefault();
      var $target = $('[data-target-panel="' + $(this).data('target-mega') + '"]');
      if (!$target.length)
        return
      if (window.pageYOffset < 10)
        $('header').removeClass('headroom--top');
      $target.toggleClass('open');
      $(this).toggleClass('active');
    });
    window.addEventListener('scroll', function () {
      document.querySelector('[data-target-mega]').classList.remove('active');
      document.querySelector('[data-target-panel]').classList.remove('open');
    });
    $('.nav-mega__tab__select a').on('click', function (e) {
      e.preventDefault();
      let target = $(this).attr('href');
      $('.nav-mega__tab').removeClass('visible');
      $(target).addClass('visible');
      $('.nav-mega__tab__select a').parent().removeClass('active');
      $(this).parent().addClass('active');
    })

    //Mob Buttons
    document.querySelector('[data-mob-burger]').addEventListener('click', function () {
      document.querySelector('[data-mob-menu]').classList.add('open');
    });

    $('[data-target-submenu]').on('click', function (e) {
      e.preventDefault();

      $('[data-target-submenu]').not(this).next().slideUp();
      $(this)
        .next().slideToggle()
        .parent().parent().toggleClass('muted');
    });
    document.querySelector('[data-mob-close]').addEventListener('click', function () {
      document.querySelector('[data-mob-menu]').classList.remove('open');
      $('[data-target-submenu]')
        .next().slideUp()
        .parent().parent().removeClass('muted');
    });
    $('[data-target-submenu-lang]').on('click', function () {
      $(this).next().slideToggle();
    });


  //  Additional Functions
    $('[data-next-slide]').on('click', function () {
      $(this).toggleClass('open');
      $(this).next().slideToggle();
    });
  },
  finalize() {
  },
};
