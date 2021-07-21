const overviewBtn = document.querySelectorAll('.overview-btn');
const structureBtn = document.querySelectorAll('.structure-btn');
const surfaceBtn = document.querySelectorAll('.surface-btn');
const overview = document.querySelector('#overview');
const structure = document.querySelector('#structure');
const surface = document.querySelector('#surface');
const h1 = document.querySelector('h1');
const img = document.querySelector('img');
const img2 = document.querySelector('#geology');
const forms = document.querySelectorAll('form');

//I needed to know the current planet name in order to be able to change the images
// I used DOM to get the name of the current planet from H1 and be capable to change the img
let currentPlanetName = h1.innerText.toLowerCase();
const colorsArray = ['#419ebb', '#eda249', '#6d2ed5', '#d14c32', '#d83a34', '#cd5120', '#1ec1a2', '#2d68f0'];

for (let i = 0; i < 2; i++) {
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

// changing the border color of elements inside the navbar depending of the planet
for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener('mouseover', (e) => {
    // forms[i].style.backgroundColor = "red";
    forms[i].style.borderBottom = "0.4px";
    forms[i].style.borderBottomColor = colorsArray[i];
    forms[i].style.borderBottomStyle  = "solid";

    e.stopPropagation();
    forms[i].addEventListener('mouseout', () => {
      forms[i].style.borderBottom = "0";
      forms[i].style.borderBottomColor = "inherit";
      forms[i].style.borderBottomStyle  = "";
    })
  })
}

function currentFact(element1, element2, element3) {
  element1.classList.remove('hide');
  element2.classList.add('hide');
  element3.classList.add('hide');
}
