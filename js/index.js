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

//drag

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