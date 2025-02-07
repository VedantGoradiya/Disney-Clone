const firebaseConfig = {
  apiKey: "AIzaSyBpLexFY5GVp6Ez60zCfjYb2lMPKBpsJ3A",
  authDomain: "disneyplus-clone-2d1be.firebaseapp.com",
  projectId: "disneyplus-clone-2d1be",
  storageBucket: "disneyplus-clone-2d1be.firebasestorage.app",
  messagingSenderId: "622224637297",
  appId: "1:622224637297:web:6c2022e87e2fb66bff4ad0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
