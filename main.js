$(document).ready(function() {
  // ScrollReveal().reveal('#home-title'), { delay: 800 };
  // ScrollReveal().reveal('.page-title'), { delay: 500 };
  // ScrollReveal().reveal('.about-honeybee', { delay: 500 });
  // ScrollReveal().reveal('.about-text', { delay: 500 });
  // ScrollReveal().reveal('.hive-text', { delay: 500 });
  // ScrollReveal().reveal('.bee-btns', { delay: 500 });

  $("#worker-content").hide();
  $("#drone-content").hide();

  $(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

  $('#radio-group').click(function() {
    var beeType = $('input[name=selector]:checked').val(); 
    if (beeType == 'queen') {
      $('#queen-content').slideToggle('slow', 'swing');
      $("#worker-content").hide();
      $("#drone-content").hide();
      
    } else if (beeType == 'worker') {
      $('#worker-content').slideToggle('slow', 'swing');
      $("#queen-content").hide();
      $("#drone-content").hide();
    } else {
      $('#drone-content').slideToggle('slow', 'swing');
      $("#queen-content").hide();
      $("#worker-content").hide();
    }
  });


  // navigation hover
  $('.hexagon.home').mouseover(function() {
    $('#hex-home').css("visibility","visible");
  });
  $('.hexagon.home').mouseout(function() {
    $('#hex-home').css("visibility","hidden");
  });
  $('.hexagon.about').mouseover(function() {
    $('#hex-about').css("visibility","visible");
  });
  $('.hexagon.about').mouseout(function() {
    $('#hex-about').css("visibility","hidden");
  });
  $('.hexagon.hive').mouseover(function() {
    $('#hex-hive').css("visibility","visible");
  });
  $('.hexagon.hive').mouseout(function() {
    $('#hex-hive').css("visibility","hidden");
  });
  $('.hexagon.buzz').mouseover(function() {
    $('#hex-buzz').css("visibility","visible");
  });
  $('.hexagon.buzz').mouseout(function() {
    $('#hex-buzz').css("visibility","hidden");
  });
  $('.hexagon.effects').mouseover(function() {
    $('#hex-effects').css("visibility","visible");
  });
  $('.hexagon.effects').mouseout(function() {
    $('#hex-effects').css("visibility","hidden");
  });
  $('.hexagon.protect').mouseover(function() {
    $('#hex-protect').css("visibility","visible");
  });
  $('.hexagon.protect').mouseout(function() {
    $('#hex-protect').css("visibility","hidden");
  });
  
});