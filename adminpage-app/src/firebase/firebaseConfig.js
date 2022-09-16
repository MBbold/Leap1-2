import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseKey";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendSignInLinkToEmail } from "firebase/auth";

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app
export const getSignUp = (email, password) => {
    const actionCodesettings = {
        url: 'http://localhost:3000/signup',
        handleCodeInApp: true,
    }
    try {
        sendSignInLinkToEmail(auth, email, actionCodesettings);
        alert("Sign Up Successfully")
    } catch (error) {

    }
    return createUserWithEmailAndPassword(auth, email, password)
}
export const getLogIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}
