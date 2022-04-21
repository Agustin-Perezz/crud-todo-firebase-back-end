
const { db } = require('../firebase/firebase.config');

class NotesService {

  async getAllNotes( uid ) {
    const querySnapshot = await db.collection(`${ uid }/todo/notes`).get();
    return querySnapshot.docs.map( doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }

  async addNote( note, uid ) {
    console.log( note, uid)
    await db.collection(`${ uid }/todo/notes`).add( note );
  }

  async updateNote( id, data, uid ) {
    console.log( id, data, uid )
    await db.doc(`${ uid }/todo/notes/${ id }`).update( data );
  }

  async deletNote( id, uid ) {
    console.log( id, uid )
    await db.doc(`${ uid }/todo/notes/${ id }`).delete();
  }

}

module.exports = NotesService;