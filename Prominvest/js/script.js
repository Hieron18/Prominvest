var swiper = new Swiper('.swiper-container', {
   slidesPerView: 4,
   spaceBetween: 20,
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });
 var swiper = new Swiper('.swiper-containerperson', {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiper = new Swiper('.swiper-containerperson_768', {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiper = new Swiper('.swiper-containerperson_479', {
  slidesPerView: 1.2,
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
 var swiper_2 = new Swiper('.swiper-container_2person', {
  slidesPerView: 3,
   spaceBetween: 20,
   navigation: {
     nextEl: '.swiper-button-next_2',
     prevEl: '.swiper-button-prev_2',
   },
 });
 var swiper_2 = new Swiper('.swiper-container_2person_768', {
  slidesPerView: 2,
   spaceBetween: 20,
   navigation: {
     nextEl: '.swiper-button-next_2',
     prevEl: '.swiper-button-prev_2',
   },
 });
 var swiper_2 = new Swiper('.swiper-container_2person_479', {
  slidesPerView: 1.2,
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
    $('.sidebar__button').click(function(){
      $('.header__burger, body, .sidebar__content').removeClass('burger');
    })
 })
 $(document).ready(function() {
  $('.sidebar__item').click(function(){
    $('.sidebar__item').removeClass('active');
    $(this).addClass('active');
    $('.header__burger, body, .sidebar__content').removeClass('burger');
  })
})