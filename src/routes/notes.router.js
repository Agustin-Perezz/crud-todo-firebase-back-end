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
    res.status(404).json({
      message: error
    }) 
  }
})

router.post('/add', async( req, res ) => {
  try {
    const { note, uid } = req.body;
    await services.addNote( note, uid );
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
    const { uid, data } = req.body;
    const { id } = req.params;
    await services.updateNote( id, data, uid );
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
    const { uid } = req.body;
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