// DOTS NAVIGATION //
$(document).ready(function($){
  var contentSections = $('.section'),
      navigationItems = $('.dots__item');

  updateNavigation();
  $(window).on('scroll', function(){
    updateNavigation();
  });

  //smooth scroll to the section
  navigationItems.on('click', function(event){
      event.preventDefault();
      smoothScroll($(this.hash));
  });

  function updateNavigation() {
    contentSections.each(function(){
      $this = $(this);
      var activeSection = $('.dots__item[href="#'+$this.attr('id')+'"]').data('number') - 1;

      // if ( ( seksn od vrha - Win visina/2 + < Win skrol od vrha ) && (seksn od vrha  + seksn visina - Win visina/2 > Win skrol od vrha ) ) {

      if ( ( $this.offset().top - $(window).height()/2 + 100 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 + 200 > $(window).scrollTop() ) ) {
        navigationItems.eq(activeSection).addClass('active');
      } else {
        navigationItems.eq(activeSection).removeClass('active');
      }
    });

    // if ( $(window).scrollTop() > ($('#home').height() * 0.25)) {
    if ( $(window).scrollTop() > (910 - $(window).height()/2)) {
      $('.dots').removeClass('dots--white');
    } else {
      $('.dots').addClass('dots--white');
    }
  }

  function smoothScroll(target) {
    $('body,html').animate(
      {'scrollTop':target.offset().top - 100},1000
    );
  }
});