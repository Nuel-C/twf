import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDH5FrAYsJM97QmrrVwbe-HYywFRncNBz8",
    authDomain: "twf-test-9f70d.firebaseapp.com",
    projectId: "twf-test-9f70d",
    storageBucket: "twf-test-9f70d.appspot.com",
    messagingSenderId: "595307873508",
    appId: "1:595307873508:web:fe9237dd14a10bcb9a58f1"
})

export const auth = app.auth()
export default app