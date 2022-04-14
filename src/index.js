const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

app.use( morgan('dev') );
app.use( express.json() );

app.use('/api/notes', require('./routes/notes.router'));

app.listen( PORT, () => {
  console.log(`App on port ${ PORT }`);
})