import TextScramble from './textScramble.js';

const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
let chek = false
const sidebar = document.querySelector('#sidebar');

document.querySelector('#hamburger').addEventListener('click', toggle)
document.querySelector('#sidebar').addEventListener('click', toggle)

document.querySelector('.tdnn').addEventListener('click', tdnn)

function tdnn() {
  document.getElementsByClassName("moon")[0].classList.toggle("sun");
  document.getElementsByClassName("tdnn")[0].classList.toggle("day");
  document.getElementsByTagName("BODY")[0].classList.toggle("light");
}

function toggle(){
  if (chek == false) {
    chek = true;
    // Show the sidebar using GSAP animation
    gsap.to(sidebar, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" });
    sidebar.style.visibility = 'visible'; // Ensure the sidebar is interactive
  } else {
    chek = false;
    // Hide the sidebar using GSAP animation
    gsap.to(sidebar, { opacity: 0, x: -100, duration: 0.5, ease: "power2.in" });
    setTimeout(() => {
      sidebar.style.visibility = 'hidden'; // Hide the sidebar after animation completes
    }, 500); // Wait for the animation to finish before setting visibility to hidden
  }
}

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

