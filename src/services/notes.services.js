
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
    const resp = await db.collection(`${ uid }/todo/notes`).add( note );
    return {
      ...note,
      id: resp.id
    };
  }

  async updateNote( id, data, uid ) {
    await db.doc(`${ uid }/todo/notes/${ id }`).update( data );
    return data;
  }

  async deletNote( id, uid ) {
    await db.doc(`${ uid }/todo/notes/${ id }`).delete();
  }

  async findNote( id, uid ) {
    const querySnapshot = await db.doc(`${ uid }/todo/notes/${ id }`).get();
    const data = querySnapshot.data(); 
    const idNote = querySnapshot.id;
    return {
      idNote,
      ...data
    };
  }

}

module.exports = NotesService;