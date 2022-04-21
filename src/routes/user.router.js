const express = require("express");
const router = express.Router();

router.post('/', async( req, res ) => {
  try {
    res.send('god')
  } catch (error) {
    res.status(404).json({
      message: error
    }) 
  }
})
