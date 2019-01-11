import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCmUBQlnKlflkG77J_C9KjQn2fNP0A7X3Q",
    authDomain: "stopwatch-ab027.firebaseapp.com",
    databaseURL: "https://stopwatch-ab027.firebaseio.com",
    projectId: "stopwatch-ab027",
    storageBucket: "stopwatch-ab027.appspot.com",
    messagingSenderId: "507143090007"
};

firebase.initializeApp(config);

export function firebaseListener(func) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            func(true, user);
        } else {
            func(false);
        }
    }, function(error) {
        console.log(error);
    });
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;