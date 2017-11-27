$('.carousel').slick({
    dots: true,
  centerMode: true,
  centerPadding: '',
  slidesToShow: 2,    
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '',
        slidesToShow: 1
      }
    }
  ]
});