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

    $('#main-page').animate({top:0},2000, function(){
        $('#main-page').css({
            top: 0,
        });
    });
console.log('intro is loaded');
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

    function sticky_relocate() {
        var window_top = $(window).scrollTop();
        var div_top = $('#sticky-anchor').offset().top;
        if (window_top > div_top) {
            $('#sticky').addClass('stick');
        } else {
            $('#sticky').removeClass('stick');
        }
    }
    console.log('hello sticky');

    $(function() {
        $(window).scroll(sticky_relocate);
        sticky_relocate();
    });

    $ ("#sticky a").on('click', function(event) {
      // event.preventDefault();

/*makes list visible*/
      $( "#list" ).removeClass( "invisible" );
    });
    console.log('hello student list');

// disable sticky on mobile
    $(function() {
        var $window = $(window),
            $html = $('html');

        $window.resize(function resize() {
            if ($window.width() < 514) {
                return $("div#sticky").removeID('#sticky');
            }

            $html.removeClass('mobile');
        }).trigger('resize');
    });


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
