var admin = require("firebase-admin");

var serviceAccount = require("./SAK.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.db = admin.firestore();
