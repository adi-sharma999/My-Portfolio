var x = document.querySelector('.preloader');
function fadeOut(el){
  var opacity = 6;
  var interval = setInterval(function(){
    if(opacity>0){
      opacity -= .1;
      el.style.opacity = opacity;
    }else{
      clearInterval(interval);
      el.style.display = 'none';
    }
  },20);
}
fadeOut(x);

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
  section.forEach(sec =>{
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 250;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };
  });
}

var swiper = new Swiper(".certi-slider",{
    spaceBetween: 1,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop:true,
});



