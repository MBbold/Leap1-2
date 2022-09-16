import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseKey";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendSignInLinkToEmail} from "firebase/auth";
import { useEffect, useState } from "react";

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app
export const getSignUp =(email, password )=>{
    sendSignInLinkToEmail(email,{
        url:'http://localhost:3000/signup'
        // console.log("sss")
    })
    return createUserWithEmailAndPassword(auth, email, password) 
}
export const getLogIn =(email, password )=>{
    console.log("Newtrew")
    return signInWithEmailAndPassword(auth, email, password)
}
