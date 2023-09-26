import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDUC_T6sertqZwfJNLc5k9eMOB0THSQYus",
    authDomain: "crwn-clothing-db-353d1.firebaseapp.com",
    projectId: "crwn-clothing-db-353d1",
    storageBucket: "crwn-clothing-db-353d1.appspot.com",
    messagingSenderId: "417961478188",
    appId: "1:417961478188:web:82907e7333ecd62bcee989"
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)



export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)
    
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
}