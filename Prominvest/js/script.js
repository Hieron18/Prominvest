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


function slowScroll (id) {
  var offset = 0;
  $('html, body').animate ({
    scrollTop: $(id).offset ().top - offset
  }, 500);
  return false;
}



var countDownDate = new Date("Apr 2, 2021 09:00:00").getTime();
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
    if (seconds < 10) {
      document.getElementById("time").innerHTML =
      days + " дня " + hours + ":" + minutes + ":" + "0" + seconds;
    }
    if (minutes < 10) {
      document.getElementById("time").innerHTML =
      days + " дня " + hours + ":" + "0" + minutes + ":" + seconds;
    }
}, 1000)

const animItems = document.querySelectorAll('._anim-items');
const sidebaritem1 = document.querySelector('.sidebar__item_1');
const sidebaritem2 = document.querySelector('.sidebar__item_2');
const sidebaritem3 = document.querySelector('.sidebar__item_3');
const sidebaritem4 = document.querySelector('.sidebar__item_4');
const sidebaritem5 = document.querySelector('.sidebar__item_5');

if(animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll () {
    for(let index = 0; index < animItems.length; index++){
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 1;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if(animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('active');
      } else{
        animItem.classList.remove('active');
      }
    }
    if($('#movetopic').hasClass('active')){
      $('.sidebar__item_1').addClass('active')
      $('.sidebar__item_2').removeClass('active')
      $('.sidebar__item_3').removeClass('active')
      $('.sidebar__item_4').removeClass('active')
      $('.sidebar__item_5').removeClass('active')
    }else{
      $('.sidebar__item_1').removeClass('active')
    }

    if($('#moveperson').hasClass('active')){
      $('.sidebar__item_1').removeClass('active')
      $('.sidebar__item_3').removeClass('active')
      $('.sidebar__item_5').removeClass('active')
      $('.sidebar__item_4').removeClass('active')
      $('.sidebar__item_2').addClass('active')
    }else{
      $('.sidebar__item_2').removeClass('active')
    }

    if($('#moveprogram').hasClass('active')){
      $('.sidebar__item_1').removeClass('active')
      $('.sidebar__item_2').removeClass('active')
      $('.sidebar__item_5').removeClass('active')
      $('.sidebar__item_4').removeClass('active')
      $('.sidebar__item_3').addClass('active')
    }else{
      $('.sidebar__item_3').removeClass('active')
    }

    if($('#movenews').hasClass('active')){
      $('.sidebar__item_1').removeClass('active')
      $('.sidebar__item_2').removeClass('active')
      $('.sidebar__item_3').removeClass('active')
      $('.sidebar__item_5').removeClass('active')
      $('.sidebar__item_4').addClass('active')
    }else{
      $('.sidebar__item_4').removeClass('active')
    }

    if($('#movefooter').hasClass('active')){
      $('.sidebar__item_1').removeClass('active')
      $('.sidebar__item_2').removeClass('active')
      $('.sidebar__item_3').removeClass('active')
      $('.sidebar__item_4').removeClass('active')
      $('.sidebar__item_5').addClass('active')
    }else{
      $('.sidebar__item_5').removeClass('active')
    }

  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  animOnScroll ();
}