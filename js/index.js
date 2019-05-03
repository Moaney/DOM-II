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
