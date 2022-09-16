const { async } = require("@firebase/util");
const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.onUserCreate = functions.firestore.document('users/{userId}').onWrite(async (snapshot, context) => {
    const { userId } = context.params;
    const createUser = snapshot.data();
    const newValue = snapshot.after.data();
    const deleteValue = snapshot.data();

    console.log('Change', "=====", newValue.email)
    console.log('CreateUser', userId,  "=====", createUser.email)
    console.log('DeleteValue', userId,  "=====", deleteValue.email)


  });

