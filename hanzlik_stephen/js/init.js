(function($) {
  $(function() {

    $('.button-collapse').sideNav();

  });
  jQuery(document).ready(function($) {
    // Defining a function to set size for #hero
    function fullscreen() {
      jQuery('#hero').css({
        width: jQuery(window).width(),
        height: jQuery(window).height()
      });
    }

    fullscreen();

    // Run the function in case of window resize
    jQuery(window).resize(function() {
      fullscreen();
    });


    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    });

    $("#learn-more").click(function() {
      $('html,body').animate({
          scrollTop: $("#about").offset().top
        },
        'slow');
    });

  });


  // end of document ready
})(jQuery); // end of jQuery name space
