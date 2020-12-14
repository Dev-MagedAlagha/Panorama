$(window).scroll(function() {
  let scroll = $(window).scrollTop();
  if(scroll >= 70){
     $(".navbar").addClass("nav-scroll");
  }else{
    $(".navbar").removeClass("nav-scroll");
  }
});

    $('.arabic-style').owlCarousel({
      loop: true,
      autoplay:true,
      margin: 10,
      nav: false,
      dots: true,
      rtl:true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
            320: {
          items: 1,
          nav: false
        },
            479: {
          items:1,
          nav: false
        },
        767: {
          items: 1,
          nav: false
        },
       991: {
          items: 1,
          nav: false
        },
        1199: {
          items: 1,
          nav: true,
          loop: true,
          margin: 20
        }
      }
    })
  
    


    