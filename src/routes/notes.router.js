const express = require("express");
const router = express.Router();

const NotesService = require("../services/notes.services");
const services = new NotesService;

router.post('/', async( req, res ) => {
  try {
    const { uid } = req.body;
    const allNotes = await services.getAllNotes( uid );
    res.status(200).json( allNotes );
  } catch (error) {
    res.json( JSON.stringify( error )) 
  }
})

router.post('/find/', async( req, res ) => {
  try {
    const { uid, id  } = req.body;
    const note = await services.findNote( id, uid );
    res.status(200).json( note )
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }
})

router.post('/add', async( req, res ) => {
  try {
    const { note, uid } = req.body;
    const newNote = await services.addNote( note, uid );
    res.status(201).json( newNote );
  } catch (error) {
    res.status(400).json({
      message: error
    })
  }
})

router.post('/update/', async( req, res ) => {
  try {
    const { uid, data, id } = req.body;
    const noteUpdate = await services.updateNote( id, data, uid );
    res.status(201).json( noteUpdate );
  } catch (error) {
    res.status(401).json({
      message: error
    })
  }
})

router.post('/delet/', async( req, res ) => {
  try {
    const { uid, id  } = req.body;
    await services.deletNote( id, uid );
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