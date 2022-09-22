import { initializeApp } from "firebase/app";
import { collection, getFirestore} from "firebase/firestore";

import { firebaseConfig } from "./firebaseKey";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendSignInLinkToEmail } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
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
        // console.log(error);
    }
    return createUserWithEmailAndPassword(auth, email, password)
}
export const getLogIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const addDataFoods =()=>{
    const docref = collection(db, "Foods");
}

