function getSize() {
  size = $("span,a,p,h1,li").css("font-size");
  size = parseInt(size, 10);
  $("#font-size").text(size);
}

//get inital font size
getSize();

$("#up").on("click", function () {

  // parse font size, if less than 50 increase font size

  $("body").css("font-size", "120%");
  //if ((size + 2) <= 50) {
    //$("span,a,p,h1,li").css("font-size", "+=2");
    //$("#font-size").text(size += 2);
  //}
});

$("#down").on("click", function () {

  $("body").css("font-size", "100%");
  //if ((size - 2) >= 12) {
    //$("span,a,p,h1,li").css("font-size", "-=2");
    //$("#font-size").text(size -= 2);
  //}
});


// make page greyScale
$(document).ready(function () {
  $('.color-font').click(function () {
    $('body').toggleClass('greyScaleFilter');
  })

});

$('#topheader .navbar-nav a').on('click', function () {
  $('#topheader .navbar-nav').find('li.active').removeClass('active');
  $(this).parent('li').addClass('active');
});




$(document).ready(function () {

  //Check to see if the window is top if not then display button

  var scorllbutton = $("#scorll-up");

  $(window).scroll(function () {


    if ($(this).scrollTop() >= 300) {

      scorllbutton.fadeIn();

    } else {

      scorllbutton.fadeOut();
    }
  });
  //Click event to scroll to top
  scorllbutton.click(function () {

    $("html,body").animate({ scrollTop: 0 }, 600);

    return false;
  })


  // Top nav toggle in mobile responsive
  $('.arrow-mob').click(function () {
    $('.nav-top').toggleClass('d-none d-sm-block');
  })

});






