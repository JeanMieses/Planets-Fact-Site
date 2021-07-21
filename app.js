const express = require('express');
const app = express();
const router = require('./routers/router');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('assets'));
// ...
app.use('', router);

const port = process.env.PORT || 80
app.listen(port, () => {
  console.log('Listening');
})
