const overviewBtn = document.querySelectorAll('.overview-btn');
const structureBtn = document.querySelectorAll('.structure-btn');
const surfaceBtn = document.querySelectorAll('.surface-btn');
const overview = document.querySelector('#overview');
const structure = document.querySelector('#structure');
const surface = document.querySelector('#surface');
const h1 = document.querySelector('h1');
const img = document.querySelector('img');
const img2 = document.querySelector('#geology');
//I needed to know the current planet name in order to be able to change the images
// I used DOM to get the name of the current planet from H1 and be capable to change the img
let currentPlanetName = h1.innerText.toLowerCase();

for(let i = 0; i < 2; i++) {
  overviewBtn[i].addEventListener('click', () => {
    currentFact(overview, structure, surface);
    img.src = `planet-${currentPlanetName}.svg`;
    img2.src = ``;
  })

  structureBtn[i].addEventListener('click', () => {
    currentFact(structure, overview, surface);
    img.src = `planet-${currentPlanetName}-internal.svg`;
    img2.src = ``;
  })

  surfaceBtn[i].addEventListener('click', () => {
    currentFact(surface, structure, overview);
    img.src = `planet-${currentPlanetName}.svg`;
    img2.src = `geology-${currentPlanetName}.png`
  })
}

function currentFact(element1, element2, element3) {
  element1.classList.remove('hide');
  element2.classList.add('hide');
  element3.classList.add('hide');
}
