const express = require('express')
const app = express();
const router = express.Router();
const data = require('./../data.json');

// ********we are comparing data obj to req.params and returning if we find the planet
// currentPlanet === req.params
function findReturnPlanet(data, currentPlanet) {
  let foundPlanet = null;

  for (let i = 0; i < data.length; i++) {
    let findPlanet = data[i].name.toString().toLowerCase();
    if (currentPlanet === findPlanet) {
      foundPlanet = data[i];
    }
  }
  return foundPlanet;
}

//*******************routers****************************
router.get('/data', (req, res) => { //I wanted to see how data looked like
  res.send(data);
})

router.get('/:name', (req, res) => {
  let currentPlanet = req.params.name.toString();
  let foundPlanet = findReturnPlanet(data, currentPlanet);

  if(foundPlanet) {
    res.render('planets/index.ejs', {foundPlanet})
  } else {
    res.redirect('/data');
  }
})

module.exports = router
