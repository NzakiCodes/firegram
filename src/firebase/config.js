import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAJ4bCCiZJxE0TUosU2mGLftRDmcxm_bN0",
    authDomain: "firegram-nzaki.firebaseapp.com",
    databaseURL: "https://firegram-nzaki.firebaseio.com",
    projectId: "firegram-nzaki",
    storageBucket: "firegram-nzaki.appspot.com",
    messagingSenderId: "1019098980044",
    appId: "1:1019098980044:web:7bc9445cb870989cac6c69"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp};