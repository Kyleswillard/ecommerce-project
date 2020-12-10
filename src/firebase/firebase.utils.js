import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: 'AIzaSyAO3P8z3LpVsJYBJmSVAcv14q0Dve_DZn8',
    authDomain: 'ecommerce-project-c4511.firebaseapp.com',
    databaseURL: 'https://ecommerce-project-c4511.firebaseio.com',
    projectId: 'ecommerce-project-c4511',
    storageBucket: 'ecommerce-project-c4511.appspot.com',
    messagingSenderId: '259894705403',
    appId: '1:259894705403:web:feb02e9dd87129ea06445e',
    measurementId: 'G-W9HS6K2JN1',
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
