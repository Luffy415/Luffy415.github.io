import TextScramble from './textScramble.js';

const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
let chk = false

gsap.to("#preloader", {
    opacity: 0,
    duration: 1, // Duration for fade-out
    delay: 2, // Add a delay of 2 seconds
    ease: "power2.out", // Easing for smooth effect
    onComplete: () => {
        // After animation is complete, hide preloader
        document.getElementById('preloader').style.display = 'none';
    }
});

if (window.innerWidth > 1024){
  console.log("laptop");
  
  window.addEventListener("load", (event) => {
    new cursoreffects.followingDotCursor({color: ["#A3B9D1"]});
  });
}

function show() {
     hover.classList.add('active');
     modal.classList.add('show');
}

function hide() {
     hover.classList.remove('active');
     modal.classList.remove('show');
}

image.addEventListener('click', show);
close.addEventListener('click', hide);

var chkbtn = document.getElementById("chkbtn");
const sidebar = document.getElementById('sidebar');

function toogle() {
     if (!chk) {
     	chk = true
          sidebar.style.display = 'block'
          sidebar.style.animation = 'fadeIn 0.25s linear'
     } else {
     	 chk = false
          sidebar.style.animation = 'fadeOut 0.25s linear forwards'
     }
}
const phrases = [
  'shaurya'
]

const el = document.querySelector('.name')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800)
  })
  counter = (counter + 1) % phrases.length
}

next()

