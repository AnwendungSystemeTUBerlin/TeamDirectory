function navbarAnimation(){
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 100) {
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
         $("nav").removeClass('hideNav');
      } else {
         $("nav").addClass('hideNav');
         $(".navbar-collapse").removeClass('show');
      }
      prevScrollpos = currentScrollPos;
    }
}
