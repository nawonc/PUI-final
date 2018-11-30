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
      $('#queen-content').show();
      $("#worker-content").hide();
      $("#drone-content").hide();
      
    } else if (beeType == 'worker') {
      $('#worker-content').show();
      $("#queen-content").hide();
      $("#drone-content").hide();
    } else {
      $('#drone-content').show();
      $("#queen-content").hide();
      $("#worker-content").hide();
    }

  });

});
