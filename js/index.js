// Your code goes here
//MOUSEOVER

const links = document.querySelector('nav');
links.addEventListener('mouseover', function(e) {
    e.target.style.color = 'gold';

    setTimeout(function() {
        e.target.style.color = '';
    }, 500);
}, false);

//Click Event

const button = document.querySelectorAll('.btn');
button.forEach(button => {
  button.addEventListener('click', e => {
    e.target.style.color = 'green';
  });
});

//Wheel

function zoom(e) {
  e.preventDefault();

  if(e.deltaY < 0) {
    scale *= e.deltaY * -2;
  }
  else {
    scale/= e.deltaY * 2;
  }
  scale = Math.min(Math.max(.125, scale),1.5);
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.intro img');
el.onwheel = zoom;

//drag + drop

var dragged; 
document.addEventListener('drag', function(e) {

}, false);

document.addEventListener('dragstart', function(e) {
  dragged = e.target;
  e.target.style.opacity = .5;
}, false);

document.addEventListener('dragend', function(e) {
  e.target.style.opacity = '';
}, false);

document.addEventListener('dragover', function(e) {
  e.preventDefault();
}, false);

document.addEventListener('dragenter', function(e) {
  if (e.target.className == 'img-content') {
    e.target.style.background = 'dodgerblue';
  }
}, false);

document.addEventListener('dragleave', function(e) {
  if (e.target.className == 'img-content') {
    e.target.style.background = 'gold';
  }
}, false);

document.addEventListener('drop', function(e) {
  e.preventDefault();
  if (e.target.className == 'img-content') {
    e.target.style.background = '';
    dragged.parentNode.removeChild(dragged);
    e.target.appendChild(dragged);
  }
}, false);

//load

// const log = document.querySelector('.footer');
// const loadUp = document.querySelector('.main-navigation');

// loadUp.addEventListener('click', () => {
//   log.textContent = '';
//   window.setTimeout(() => {
//     window.location.reload(true);
//   }, 200);
// });

// window.addEventListener('load', (e) => {
//   log.textContent = log.textContent + 'load\n';
// });

// document.addEventListener('readystatechange', (e) => {
//   log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
// });

// document.addEventListener('DOMContentLoaded', (e) => {
//   log.textContent = log.textContent + `DOMContentLoaded\n`;
// });

// focus

const funBus = document.querySelector('.logo-heading');

funBus.addEventListener('click', (e) => {
  e.target.style.background = 'gold';
});

funBus.addEventListener('dblclick', (e) => {
  e.target.style.background = 'white';
});

//resize


const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
};

window.oneresize = reportWindowSize;

//scroll


let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {

}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
    ticking = true;
  }
});

// select

noContext = document.getElementById('noContext');
noContext.addEventListener('contextmenu', e => {
  e.preventDefault();
});

//dblclick

const asides = document.querySelectorAll('aside');
console.log(asides);

const asidesArr = Array.from(asides);
console.log(asidesArr);

asidesArr.forEach(aside => {
  aside.addEventListener('dblclick', function (e) {
    aside.classList.toggle('large');
  });
});