var colors = {
  filterVal : 'invert(12%) sepia(5%) saturate(16%) hue-rotate(37deg) brightness(107%) contrast(100%)',
  darkColor : '#fff',
  lightColor : '#212121'  
}

var cursor = $('.cursor');

$( document ).ready(function() {
  $('.acc-heading').click(function() {
    var id = $(this).attr("id");
    var that = $(this);

    $(this).siblings('.acc-body').slideToggle(400, function() {

      if ($(this).is(":visible")) {

        if (id == 'contact-heading') {
          $([document.documentElement, document.body]).animate({
            scrollTop: $(document).height()
          }, 400);
        } else {
          $([document.documentElement, document.body]).animate({
            scrollTop: that.offset().top
          }, 400);
        }

      }
    });

    chooseColor($(this));

    animateColour($(this), colors.filterVal, colors.darkColor, colors.lightColor);
  });

  $( document ).mousemove(function(event) {
    var x = event.pageX;
    var y = event.pageY;
    cursor.css("top", y + "px");
    cursor.css("left", x + "px");
    cursor.show();
  });

  $( document ).mouseout(function(event) {
    cursor.hide();
  });  

  $('.acc-heading, .contact-info a').hover(
    function() {
      cursor.stop( true, true ).animate({height: "50px", width: '50px'}).css({'transform' : 'translate(-25px, -25px)'});
    }, function() {
      cursor.stop( true, true ).animate({height: "20px", width: '20px'}).css({'transform' : 'translate(-10x, -10px)'});
    }
  );  


  function chooseColor(that) {
    var sectionText = that.children('h2').text();

    switch(sectionText) {
      case 'Printing':
        colors = {
          filterVal : 'invert(76%) sepia(81%) saturate(764%) hue-rotate(155deg) brightness(103%) contrast(98%)',
          darkColor : '#063b41',
          lightColor : '#4eeafc'
        }
        break;
      case 'Graphic Design':
          colors = {
            filterVal : 'invert(54%) sepia(56%) saturate(1734%) hue-rotate(321deg) brightness(105%) contrast(94%)',
            darkColor : '#4f0707',
            lightColor : '#f96868'
          }
          break;
        case 'Web Design':
          colors = {
            filterVal : 'invert(90%) sepia(50%) saturate(554%) hue-rotate(357deg) brightness(91%) contrast(93%)',
            darkColor : '#514e04',
            lightColor : '#e1df57'
          }
          break;
        case 'Contact':
          colors = {
            filterVal : 'invert(71%) sepia(2%) saturate(3%) hue-rotate(350deg) brightness(99%) contrast(91%)',
            darkColor : '#212121',
            lightColor : '#b0b0b0'
          }
          break;
      default:
        colors = {
          filterVal : 'invert(12%) sepia(5%) saturate(16%) hue-rotate(37deg) brightness(107%) contrast(100%)',
          darkColor : '#fff',
          lightColor : '#212121'  
        }
        break;
    }
  }

  function animateColour(that, filterVal, darkColor, lightColor) {
    $('.logo').css({'filter' : filterVal});
    $('body').css({
        'background-color' : darkColor,
        'color' : lightColor
      });

      $('.card-desc p').css({
        'color' : lightColor
      });
      
      $('.acc-heading').css({
        'border-color': lightColor
      });

      var iconArrow = $(that).children('.arrow-down');
      iconArrow.toggleClass('flip');

      $('.icon').css({'filter' : filterVal});
  }

});