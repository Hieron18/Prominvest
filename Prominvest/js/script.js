var swiper = new Swiper('.swiper-container', {
   slidesPerView: 4,
   spaceBetween: 20,
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });
var swiper_2 = new Swiper('.swiper-container_2', {
   slidesPerView: 4,
   spaceBetween: 20,
   navigation: {
     nextEl: '.swiper-button-next_2',
     prevEl: '.swiper-button-prev_2',
   },
 });
 $(document).ready(function() {
    $('.header__burger').click(function(){
      $('.header__burger, body, .sidebar__content').toggleClass('burger');
    })
 })
 $(document).ready(function() {
   $(window).resize(function() {
      if ($(window).width() < '1024'){
         var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 10,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
  }
  if ($(window).width() < '768'){
   var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
   }
   if ($(window).width() < '479'){
      var swiper = new Swiper('.swiper-container', {
         slidesPerView: 1.5,
         spaceBetween: 20,
         navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         },
       });
       var swiper_2 = new Swiper('.swiper-container_2', {
         slidesPerView: 1.5,
         spaceBetween: 20,
         navigation: {
           nextEl: '.swiper-button-next_2',
           prevEl: '.swiper-button-prev_2',
         },
       });
      }
});
});
