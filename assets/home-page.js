const steps = document.querySelector('.plan__wrapper');
const circles = document.querySelectorAll('.plan__circle');
const sticks = document.querySelectorAll('.complete');
const transitions = document.querySelectorAll('.transition');

for (let i = 0; i < transitions.length; i++) {
  transitions[transitions.length - 1].style.display = 'none';
}


const listener = function () {
  const coord = steps.getBoundingClientRect();
  const viewport = window.scrollY;
  if (coord.y <= 500) {
    circleCounter = 0;
    for (let circle of circles) {
      setTimeout(function() {
        circle.classList.add('circle-active');
      }, circleCounter);
      circleCounter += 2000;
    }
    
    let stickCounter = 1000;
    for (let i = 0; i < sticks.length; i++) {
      sticks[sticks.length - 1].style.display = 'none';
      setTimeout(function() {
        sticks[i].classList.add('active');
      }, stickCounter);
      stickCounter += 2000;
    }
  }
}

window.addEventListener('scroll', listener, true);

$(document).ready(function(){
  $('.services__slider').slick({
    arrows: false,
    dots: true,
    // adaptiveHeight: true,
    slidesToShow: 1,
    infinite: false
  });
});