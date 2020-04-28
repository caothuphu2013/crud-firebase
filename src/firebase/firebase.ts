import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBgho1sYAIFUZlqmSbr2V7uiAYdt82jk08",
  authDomain: "crud-typescript.firebaseapp.com",
  databaseURL: "https://crud-typescript.firebaseio.com",
  projectId: "crud-typescript",
  storageBucket: "crud-typescript.appspot.com",
  messagingSenderId: "1044623616828",
  appId: "1:1044623616828:web:2fc9964df8c0d2c27bcc39",
  measurementId: "G-99VQF8R8SR"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
firebase.analytics();

export const db = firebase.database().ref();