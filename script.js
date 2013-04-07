$(document).ready(function() {
  var meta = $('#meta'),
      planets = $('#planets'),
      scrollbar = $('#scrollbar'),
      scroller = $('#scrollbar #scroller');

  /* Fill the rest of the visible page with the Planets element */
  planets.height($(window).height() - meta.outerHeight(true) - scrollbar.outerHeight(true));

  $('a.planet').click(function(e) {
    // Get left offset of planet.
    var loc = parseInt($('#' + $(this).attr('href')).css('left'), 10);
    // Now make sure we put the planet in the center.
    loc -= $(document).width() / 2;
    console.log(loc);

    // Go there!
    planets.animate({scrollLeft: loc + 'px'});
    e.preventDefault();
  });

  /* Make the scrollbar work
  var clicked = false,
      offset = 0,
      min = 2 + (scroller.width() / 2),
      max = $(document).width() - (2 + scroller.width());

  scroller.mousedown(function(e) {
    $(this).css('background-color', '#000');
    clicked = true;
    offset = e.pageX - scroller.offset().left;
    console.log(offset);
    e.preventDefault();
  });
  $(document).mouseup(function(e) {
    scroller.css('background-color', '');
    clicked = false;
    offset = 0;
    e.preventDefault();
  });

  $(document).mousemove(function(e) {
    if(clicked) {
        /* TODO: THINK about this! *sigh*
      var x = (e.pageX - offset) + (scroller.width()/2);
      console.log(e.pageX, x)
      if(x < min || x > max) {
        void(0);
      } else {
        scroller.css('left', x);
      }
    }
  });*/
});
