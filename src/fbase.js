import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAdPojieHvklSeLhdEK9p1OJcUoUO6f0DM",
    authDomain: "clockwork-bookstore-c8b54.firebaseapp.com",
    databaseURL: "https://clockwork-bookstore-c8b54.firebaseio.com",
    projectId: "clockwork-bookstore-c8b54",
    storageBucket: "clockwork-bookstore-c8b54.appspot.com",
    messagingSenderId: "950537296528",
    appId: "1:950537296528:web:ab2a0bc867b378288a1615",
    measurementId: "G-20JLW546MS"
});

const fbase = Rebase.createClass(firebaseApp.database());

export { fbase, firebaseApp };