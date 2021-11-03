$(document).ready(function(){
  $('.popup-gallery').slick({
    arrows:false,
    dots:true,
    slidesToShow:3,
    responsive:[
      {
        breakpoint: 770,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow:1
        }
      }
    ]
  });
})