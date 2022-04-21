const { getAuth } = require('firebase-admin/auth');

const validateUserToken = async( userToken ) => {

  try {
    const decodedToken = await getAuth().verifyIdToken( userToken );
    console.log( 'uid:' + decodedToken.uid )  
    return decodedToken.uid
  } catch (error) {
    console.log( error )  
  }

}

module.exports = validateUserToken;