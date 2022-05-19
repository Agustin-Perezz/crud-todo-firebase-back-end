const express = require("express");
const morgan = require("morgan");
const cors = require('cors');

const notesRouter = require('./src/routes/notes.router');

const app = express();
const PORT = process.env.PORT || 3005;

const whiteList = ['http://localhost:3000', 'http://localhost:3005', 'https://intense-spire-90736.herokuapp.com/'];

app.use( cors({ origin: whiteList }) );
app.use( morgan('dev') );
app.use( express.json() );

app.get( '/', (req,res) => res.send('Hello from heroku.'));

app.use('/api/notes', notesRouter );

app.listen( PORT, () => {
  console.log(`App on port ${ PORT }`);
})