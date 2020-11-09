import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEEAsGFlEMV9Ldr26IR9IMyAuBC2ybI-I",
    authDomain: "clone-d01b6.firebaseapp.com",
    databaseURL: "https://clone-d01b6.firebaseio.com",
    projectId: "clone-d01b6",
    storageBucket: "clone-d01b6.appspot.com",
    messagingSenderId: "445926265381",
    appId: "1:445926265381:web:af33483e44b7b0917da5cc",
    measurementId: "G-3FQ0RPFFV2"
}

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebaseapp.auth();

export {db , auth};

