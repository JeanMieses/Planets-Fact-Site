const overviewBtn = document.querySelectorAll('.overview-btn');
const structureBtn = document.querySelectorAll('.structure-btn');
const surfaceBtn = document.querySelectorAll('.surface-btn');

const overview = document.querySelector('#overview');
const structure = document.querySelector('#structure');
const surface = document.querySelector('#surface');

for(let i = 0; i < 2; i++) {
  overviewBtn[i].addEventListener('click', () => {
    currentFact(overview, structure, surface);
  })

  structureBtn[i].addEventListener('click', () => {
    currentFact(structure, overview, surface);
  })

  surfaceBtn[i].addEventListener('click', () => {
    currentFact(surface, structure, overview);
  })
}

function currentFact(element1, element2, element3) {
  element1.classList.remove('hide');
  element2.classList.add('hide');
  element3.classList.add('hide');
}
