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

var countDownDate = new Date("Feb 27, 2021 00:00:00").getTime();
var countDownFunction = setInterval(function (){
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000*60*60*24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("time").innerHTML =
    days + " дня " + hours + ":" + minutes + ":" + seconds;
    if (distance < 0){
      clearInterval(countDownFunction);
      document.getElementById("time").innerHTML = "Время истекло"
    }
}, 1000)