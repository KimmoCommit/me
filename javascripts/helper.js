
$(window).scroll(function(){
  var position = $(window).scrollTop();
  var height = $(window).height();
  var width = $(window).width();
  var jumboHeight = $(".jumbo-container").height();
  var lowerNavHeight = $("#lower-nav").height();
  var breakPoint = jumboHeight - lowerNavHeight;



  if(position >= breakPoint){

    if(width < 980){
        $("#brand-img").fadeOut();
      }

  


    $("#lower-nav").css({
      'top':'45px',
      'position':'fixed',
      'background-color':'rgba(227,231,234,0.8)',
      'z-index':'1',

    });   
    //rgb(158, 184, 207)
    //rgb(164, 183, 190)
    //rgb(227, 231, 234)
    $(".fix").css({
      'display':'block'

    });
    $("div#lower-nav a").each(function(){
      $(this).addClass("lower-nav-link-after");
    });



  } else {


    if(width < 980){
        $("#brand-img").show();
      }


    $("#lower-nav").css({
      'background-color':'rgba(30,30,30,1)',
      'top':'none',
      'position':'relative',

    });

    $(".fix").css({
      'display':'none'
    });

      $("div#lower-nav a").each(function(){
      $(this).removeClass("lower-nav-link-after");
    });

  }

  /**if(position > 210){
    $("#main-nav").css({'background-color':'rgba(250,250,250,1)'});
  } else {
    $("#main-nav").css("background-color","rgba(250,250,250,1)");

  }**/

});


$(function(){
 $("#lower-nav a").click(function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop: $( $.attr(this, 'href')).offset().top - 150}, 400);
});
});

$(function(){
  $(".scrolltop").click(function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 'slow');
  });
});

$(window).scroll(function(){
  var position = $(window).scrollTop();
  var height = $(window).height();

  if(position > 690){
    $(".scrolltop").fadeIn();
  } else {
     $(".scrolltop").hide();
  }
    }); 