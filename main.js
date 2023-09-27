
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scrolled', window.scrollY > 0)
})

//contact buttons (circular text button)

const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');

   text.innerHTML = text.innerHTML.split('').map((character, index) => 
   `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})



//swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 1000, // Time in milliseconds between slides
      disableOnInteraction: false, // Prevent autoplay from stopping on user interaction
    },
    breakpoints: {
      599: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1023: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },
  });
  
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//         599:{
//             slidesPerView: 2,
//             spaceBetween: 40
//         },
//         1023: {
//             slidesPerView: 3,
//             spaceBetween: 60
//         }
//     }
//   });

//   navbar
const nav = document.querySelector(".nav__links");
const openNavBtn = document.querySelector("#nav__toggle-open");
const closeNavBtn = document.querySelector('#nav__toggle-close');

openNavBtn.addEventListener('click', () => {
    nav.style.display = 'flex';
    closeNavBtn.style.display = 'inline-block';
    openNavBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    nav.style.display = "none";
    closeNavBtn.style.display = 'none';
    openNavBtn.style.display = "inline-block";

}

closeNavBtn.addEventListener('click', closeNav);


// close menu on click
if(document.body.clientWidth < 1024) {
nav.querySelectorAll('li a').forEach(navLink => {
    navLink.addEventListener('click', closeNav);
}) 
}