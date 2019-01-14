import firebase from 'firebase';

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
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
