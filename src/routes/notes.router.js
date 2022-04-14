const express = require("express");
const router = express.Router();

const NotesService = require("../services/notes.services");
const services = new NotesService;

router.get('/', async( req, res ) => {
  try {
    const allNotes = await services.getAllNotes();
    res.status(200).json( allNotes );
  } catch (error) {
    res.status(404).json({
      message: error
    }) 
  }
})

router.post('/add', async( req, res ) => {
  try {
    const note = req.body; 
    await services.addNote( note );
    res.status(201).json({
      message: 'created'
    })
  } catch (error) {
    res.status(401).json({
      message: error
    })
  }
})

router.post('/update/:id', async( req, res ) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await services.updateNote( id, data );
    res.status(201).json({
      message: 'note updated'
    })
  } catch (error) {
    res.status(401).json({
      message: error
    })
  }
})

router.get('/delet/:id', async( req, res ) => {
  try {
    const { id } = req.params;
    await services.deletNote( id );
    res.status(201).json({
      message: 'note deleted'
    })
  } catch (error) {
    res.status(401).json({
      message: error
    })
  }
})

module.exports = router;