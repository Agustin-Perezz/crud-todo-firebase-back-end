const express = require("express");
const morgan = require("morgan");
const cors = require('cors');

const app = express();
const PORT = 3005;

const whiteList = ['http://localhost:3000', 'http://localhost:3005', 'https://git.heroku.com/intense-spire-90736.git'];

app.use( cors({ origin: whiteList }) );
app.use( morgan('dev') );
app.use( express.json() );

app.get( '/', () => console.log('Working...'));

app.use('/api/notes', require('./routes/notes.router'));

app.listen( PORT, () => {
  console.log(`App on port ${ PORT }`);
})