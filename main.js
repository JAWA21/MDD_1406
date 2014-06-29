$(function() {

  // back to top
  // window height + offset
  if ( ($(window).height() + 100) < $(document).height() ) {
      $('#top-link-block').removeClass('hidden').affix({
          // how far to scroll down before link "slides" into view
          offset: {top:100}
      });
  }

  // back to top click
  $('#backToTopBtn').click(function(){
      $('html,body').animate({scrollTop:0},'slow');return false;
  });


  // smooth scrolling from nav
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});