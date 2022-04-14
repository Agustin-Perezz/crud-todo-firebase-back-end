
const { db } = require('../firebase/firebase.config');

const notesRef = db.collection('notes');

class NotesService {

  async getAllNotes() {
    const querySnapshot = await notesRef.get();
    return querySnapshot.docs.map( doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }

  async addNote( note ) {
    notesRef.add( note );
  }

  async updateNote( id, data ) {
    await notesRef.doc( id ).update( data );
  }

  async deletNote( id ) {
    await notesRef.doc( id ).delete();
  }

}

module.exports = NotesService;