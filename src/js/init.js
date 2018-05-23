$(document).ready(function () {
  //SVG
  svg4everybody();
  autosize($('textarea'));


  //Header Nav
  $('.header__trigger').click(function () {
    $('body').toggleClass('nav-on');
    $(this).children().toggleClass('menu-trigger--x');
  });

  $('.header__invite').on('click', function (event) {
    event.preventDefault();
    smoothScroll($(this.hash));
  });

  function smoothScroll(target) {
    $('body,html').animate(
      { 'scrollTop': target.offset().top - 100 }, 200
    );
  }


  //Share
  $('.share__btn--trigger').click(function () {
    $(this).parents('.header').toggleClass('share-on');
  });


  //Collapse
  $('.collapse-trigger').click(function (e) {
    // $('.collapse:not(.on)').stop().slideUp();

    $(this).next('.collapse').stop().slideToggle(300, "linear");
    $(this).toggleClass('on');
  });


  //Scroll from top
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    if (scroll > 0) {
      $('.page').addClass('scrolled');
    } else {
      $('.page').removeClass('scrolled');
    }
  });


  //Textarea Autosize
  autosize(document.querySelector('textarea'));


  //Is In Viewport
  var winHalf = $(window).height() * 0.75;
  $('.animate').isInViewport().addClass('inView');
  $(window).scroll(function () {
    $('.animate').isInViewport({ tolerance: winHalf }).addClass('inView');
  });


  //Copy Text
  $('.copy-text').click(function () {
    $(this).addClass('copied');
  });


  //Form bar
  $('.floater').append('<i class="floater__bar"></i>');
});
