const express = require('express');
const app  = express();
const router = require('./routers/router');

app.set('view engine', 'ejs');
app.use(express.static('public'));
// ...
app.use('', router);

app.listen(3000, () => {
  console.log('Listening');
})
