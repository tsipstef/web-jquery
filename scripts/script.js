//uparxei kai: $(window).load( function(){    }); alla perimenei kai tis eikones kaiola ta arxeia 
$(function(){

  //paradeigma an theloume na kanoume kati se fuul screen h na thn mazepsoume
  var wrapper= "<div class='wrapper'>";
  var button = $(".button");
  var wrapped = true;

  button[0].onclick= function() {
    if (wrapped){
      $('section').unwrap();
      wrapped = false;
      button.text('wrap');
    } else {
      $('section').wrapAll(wrapper);
      wrapped = true;
      button.text('unwrap');
    }
  };

  //$('button').empty();
  //$('#contact img').remove();

  //$('#contact img').removeAttr('alt');
  //$('#contact img').attr('alt', 'location');

  // console.log($("social-nav").css('position'));
  // $("social-nav").css('top', '-200px').css('left', '100px');

  //$('header .wrapper').removeClass('wrapper');
  //$('header > div').addClass('wrapper');

  var button2 = $("#lead-banner a");
  var show = true;
  button2[0].onclick = function(){
    var myLis = $("#points-of-sale li");
  
    myLis.mouseenter(function(){
    $(this).css({"background": "lightgrey"});
    });
    myLis.mouseleave(function(){
    $(this).css({"background": "white"});
    });
    myLis.on("click", function(){
    $(this).find("p").slideToggle(500);
    });
    $("#points-of-sale").toggleClass("open");
    
    if (show){
      show = false;
      button2.text('Hide Our Work');
    } else {
      show= true;
      button2.text('View Our Work');
    }
    return false;
  };


  $('*').on('click', function(e){
      console.log(e.target);
      console.log("the event type is " + e.type);
      e.stopPropagation();
  });

  
  function complete(){
    alert("animation is completed")
  }

  $("#clients > h2").on("click", function(){
    $(this).animate({"width": "500px", "height": "100px"}, 1000, "linear", complete);
  });

  $("#contact > h2").on("click", function(){
    $(this).fadeOut(2000).fadeIn(500);
  });


  $("img[alt=map]").on("click", function(){
    $(this).fadeTo(200, 0.2).fadeTo(200, 0.8)
    .fadeTo(200, 0.2).fadeTo(200, 0.8)
    .fadeTo(200, 0.2).fadeTo(200, 0.8);
  });

  $("#contact-methods > li").on("click", function(){
    $("#contact-methods > li > span").toggle(1000);
    });

  $('.slide-button-up').on("click", function(){
    $("#lead-banner").slideUp();
    });
  $('.slide-button-down').on("click", function(){
    $("#lead-banner").slideDown();
    });
  $('.slide-button-toggle').on("click", function(){
    $("#lead-banner").slideToggle();
    });

  // var allQuotes = $("blockquote");
  // var currentQuote = 0;

  // function changeQuote(){
  //   $(allQuotes[currentQuote]).fadeOut(200, function(){

  //   if (currentQuote === allQuotes.length - 1){
  //     currentQuote = 0;
  //   } else {
  //     currentQuote++;
  //   }
  //   $(allQuotes[currentQuote]).fadeIn(200);

  //   });
    

  // }
  // var quoteTimer = setInterval(changeQuote, 3000);

  $(".rslides").responsiveSlides();

});





 








