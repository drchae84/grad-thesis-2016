$(document).ready(function() {
// INTRO ANIMATION
$('#intro').one('click', function () {

    var windowHeight = $(window).height();
    var lineHeight = $('#line').height();
    var desiredBottom = 0;
    var desiredTop = -1000;
    var newPosition = windowHeight - (lineHeight + desiredBottom);


    $('#line').animate({top:-5000},3000,function () {
        $('#line').css({
            top: -5000,
        });
    });
    $('#line2').animate({top:5000},3000,function () {
        $('#line2').css({
            bottom: 5000,
            top: 'auto'
        });
    });

    $( "#info" ).fadeIn(1200);
    $( "#dept" ).fadeIn(1200);
    $( 'html' ).css({overflow: 'scroll'});
});

// ANCHOR LINK SMOOTH SCROLLING //

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


    $ ("#dept a").on('click', function(event) {
      // event.preventDefault();

/*makes list visible*/
      $( "#list" ).removeClass( "invisible" );
    });
    console.log('hello student list');


// THUMBNAIL DISPLAY
$('#list p').hover(function() {
    var idx = $('#list p').index(this);

    $('.thumb').eq(idx).css('display', 'block');
  }, function() {
    var idx = $('#list p').index(this);
    $('.thumb').eq(idx).css('display', 'none');
  });
    console.log('student list');

$('#clock').click(function(){
        $('#timelapse').toggleClass('hidden');
    });
});
