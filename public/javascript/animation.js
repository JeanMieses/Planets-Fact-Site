// For these animations, I used https://animejs.com/

const h1_ = document.querySelector('h1');
const spans = document.querySelectorAll('span');
const planet = document.querySelector('#planet');

//This will add an animation to the numbers on the bottom page
for (let i = 1; i < spans.length; i++) {
  anime({
    targets: spans[i],
    innerHTML: [0, spans[i].innerText],
    easing: 'linear',
    duration: 1600,
    round: 10 // Will round the animated value to 1 decimal
  });
}

// animate the planets img
anime({
  targets: planet,
  translateX: [-580, 0], // from 100 to 250
  translateY: [1250, 0], // from 100 to 250
  duration: 1230,
  delay: 500,
  scale: [{
      value: 2,
      easing: 'easeOutSine',
      duration: 180
    },
    {
      value: 0.8,
      easing: 'easeOutSine',
      duration: 180
    },
    {
      value: 1,
      easing: 'easeInOutQuad',
      duration: 180
    }
  ]
});
