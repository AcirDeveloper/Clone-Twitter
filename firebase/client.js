import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyZf8Xqf8zUtZSTOkPHxjZ_xM0bBbiyYA",
    authDomain: "mydevtter.firebaseapp.com",
    projectId: "mydevtter",
    storageBucket: "mydevtter.appspot.com",
    messagingSenderId: "194161596441",
    appId: "1:194161596441:web:0e563e57abae8b3b487288",
    measurementId: "G-NVRZTQVQ1Y",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuth = (user) => {
    const { displayName, email, photoURL } = user
    return {
        username: displayName,
        avatar: photoURL,
        email,
    }
}

export const onAuthStateChanged = (onChange) => {
    return firebase.auth().onAuthStateChanged((user) => {
        // console.log(user)
        const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null
        onChange(normalizedUser)
    })
}

export const loginWithGithub = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider()
    return firebase.auth().signInWithPopup(githubProvider)
    /* .then((user) => {
            return mapUserFromFirebaseAuth(user);
        }); */
}

// Segundo metodo
/* export const loginWithGithub2 = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(githubProvider)
        .then(mapUserFromFirebaseAuth);
}; */
